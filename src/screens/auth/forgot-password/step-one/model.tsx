import { yupResolver } from '@hookform/resolvers/yup';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { AuthRootList } from '@/navigation/auth.navigation';
import { iconsVerifyEmail } from '@/utils/records/icons-verify-email';

export const useForgotPasswordStepOne = () => {
  const [verifyEmail, setVerifyEmail] = useState<boolean>(false);

  const validateFormSchema = Yup.object().shape({
    email: Yup.string().email().required('Campo obrigatório')
  })

  type SubmitFormValidateData = Yup.InferType<typeof validateFormSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SubmitFormValidateData>({
    resolver: yupResolver(validateFormSchema),
    defaultValues: {
      email: ''
    }
  })

  const email = watch('email');

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setVerifyEmail(emailRegex.test(email));
  }, [email]);

  const navigator = useNavigation<NavigationProp<AuthRootList>>();
  const handleSubmitForm = () => {
    navigator.navigate('forgotPasswordStepTwo');
  }

  return {
    verifyEmail,
    control,
    handleSubmit,
    handleSubmitForm,
    errors,
    iconsVerifyEmail
  }
}