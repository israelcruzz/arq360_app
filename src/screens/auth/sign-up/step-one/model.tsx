import { Alert } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export const useSignUpStepOne = () => {
  const [verifyEmail, setVerifyEmail] = useState<boolean>(false);

  const validateFormSchema = Yup.object().shape({
    name: Yup.string().min(3, 'O nome precisa ter no mínimo 3 caracteres').required('Campo obrigatório'),
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
      email: '',
      name: ''
    }
  });

  const email = watch('email');

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setVerifyEmail(emailRegex.test(email));
  }, [email]);

  const iconsVerifyEmail: Record<string, React.ReactNode> = {
    true: <AntDesign name="checkcircle" size={20} color="#151515" />,
    false: <AntDesign name="checkcircle" size={20} color="#D1D1D1" />,
  };

  const handleSubmitForm = (data: SubmitFormValidateData) => {
    Alert.alert('Emaill', data.email)
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