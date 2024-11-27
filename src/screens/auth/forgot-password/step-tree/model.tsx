import { yupResolver } from '@hookform/resolvers/yup';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import * as Yup from 'yup';

import { AuthRootList } from '@/navigation/auth.navigation';
import { iconsVerifyEmail } from '@/utils/records/icons-verify-email';
import { iconsVerifyPassword } from '@/utils/records/icons-verify-password';

export const useForgotPasswordStepTreeView = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(true);
  const [viewConfirmPassword, setViewConfirmPassword] = useState<boolean>(true);

  const validateFormSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Campo obrigatório'),
    confirmPassword: Yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Campo obrigatório'),
  });

  type SubmitFormValidateData = Yup.InferType<typeof validateFormSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitFormValidateData>({
    resolver: yupResolver(validateFormSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const handleSubmitForm = (data: SubmitFormValidateData) => {
    const verifyPasswordsMatch = data.password === data.confirmPassword;

    if (!verifyPasswordsMatch) {
      Alert.alert('As senhas digitadas não são iguais!', 'Arrume');
      return;
    }

    handleClickNextScreen();
  };

  const navigation = useNavigation<NavigationProp<AuthRootList>>();

  const handleClickNextScreen = () => {
    navigation.navigate('forgotPasswordStepFor');
  };

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  const handleViewConfirmPassoword = () => {
    setViewConfirmPassword(!viewConfirmPassword);
  };

  return {
    viewPassword,
    viewConfirmPassword,
    control,
    handleSubmit,
    handleSubmitForm,
    handleViewPassword,
    handleViewConfirmPassoword,
    iconsVerifyPassword,
    errors,
    iconsVerifyEmail,
  };
};
