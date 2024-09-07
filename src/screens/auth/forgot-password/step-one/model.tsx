import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { iconsVerifyEmail } from '~/utils/records/icons-verify-email';

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

  const handleSubmitForm = () => {}

  return {
    verifyEmail,
    control,
    handleSubmit,
    handleSubmitForm,
    errors,
    iconsVerifyEmail
  }
}