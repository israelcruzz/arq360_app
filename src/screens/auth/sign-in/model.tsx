import { AntDesign } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import * as Yup from 'yup';

import { useStorageAuth } from '@/hooks/auth-hooks/useStorageAuth';
import { AuthRootList } from '@/navigation/auth.navigation';
import { iconsVerifyEmail } from '@/utils/records/icons-verify-email';
import { iconsVerifyPassword } from '@/utils/records/icons-verify-password';

export const useSignIn = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(true);
  const [verifyEmail, setVerifyEmail] = useState<boolean>(false);
  const { setUser } = useStorageAuth();

  const validateFormSchema = Yup.object().shape({
    email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
    password: Yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Campo obrigatório'),
  });

  type SubmitFormValidateData = Yup.InferType<typeof validateFormSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SubmitFormValidateData>({
    resolver: yupResolver(validateFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const email = watch('email');

  const handleSubmitForm = (data: SubmitFormValidateData) => {
    setUser(true);
  };

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setVerifyEmail(emailRegex.test(email));
  }, [email]);

  const navigator = useNavigation<NavigationProp<AuthRootList>>();

  const navigateToForgotPassword = () => {
    navigator.navigate('forgotPasswordStepOne');
  };

  const navigateToSignUp = () => {
    navigator.navigate('signUpStepOne');
  };

  return {
    viewPassword,
    verifyEmail,
    control,
    handleSubmit,
    handleSubmitForm,
    handleViewPassword,
    navigateToForgotPassword,
    navigateToSignUp,
    iconsVerifyEmail,
    iconsVerifyPassword,
    errors,
  };
};
