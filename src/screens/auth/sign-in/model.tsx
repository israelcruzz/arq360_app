import { AntDesign } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import * as Yup from 'yup';
import { AuthRootList } from "~/navigation/auth.navigation";


export const useSignIn = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(true);
  const [verifyEmail, setVerifyEmail] = useState<boolean>(false);

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
    Alert.alert('Dados do Form', `E-mail: ${data.email} & Senha: ${data.password}`);
  };

  const handleViewPassword = () => {
    setViewPassword(!viewPassword)
  }

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setVerifyEmail(emailRegex.test(email));
  }, [email]);

  const iconsVerifyEmail: Record<string, React.ReactNode> = {
    true: <AntDesign name="checkcircle" size={20} color="#151515" />,
    false: <AntDesign name="checkcircle" size={20} color="#D1D1D1" />,
  };

  const iconsVerifyPassword: Record<string, React.ReactNode> = {
    true: <AntDesign name="eye" size={24} color="#D1D1D1" />,
    false: <AntDesign name="eye" size={24} color="#151515" />,
  };

  const navigator = useNavigation<NavigationProp<AuthRootList>>();

  const navigateToForgotPassword = () => {
    navigator.navigate('signup')
  }

  const navigateToSignUp = () => {
    navigator.navigate('signup')
  }

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
  }
}