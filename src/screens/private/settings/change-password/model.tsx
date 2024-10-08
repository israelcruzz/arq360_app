import { Alert } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthRootList } from "@/navigation/auth.navigation";
import { iconsVerifyPassword } from "@/utils/records/icons-verify-password";

export const useChangePassword = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(true);
  const [viewNewPassword, setViewNewPassword] = useState<boolean>(true);
  const [viewConfirmPassword, setViewConfirmPassword] = useState<boolean>(true);

  const validateFormSchema = Yup.object().shape({
    password: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Campo obrigatório'),
    newPassword: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
    confirmPassword: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Campo obrigatório'),
  })

  type SubmitFormValidateData = Yup.InferType<typeof validateFormSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<SubmitFormValidateData>({
    resolver: yupResolver(validateFormSchema),
    defaultValues: {
      password: '',
      newPassword: '',
      confirmPassword: ''
    }
  });

  const handleSubmitForm = (data: SubmitFormValidateData) => {
    const verifyPasswordsMatch = data.newPassword === data.confirmPassword;

    if(!verifyPasswordsMatch) {
      Alert.alert('As senhas digitadas não são iguais!', 'Arrume');
      return;
    }

    Alert.alert('Emaill', data.confirmPassword);
    handleClickNextScreen();
  }

  const navigation = useNavigation<NavigationProp<AuthRootList>>();

  const handleClickNextScreen = () => {
    navigation.navigate('signUpStepTree');
  }

  const handleViewPassword = () => {
    setViewPassword(!viewPassword)
  }

  const handleViewNewPassword = () => {
    setViewNewPassword(!viewNewPassword)
  }

  const handleViewConfirmPassoword = () => {
    setViewConfirmPassword(!viewConfirmPassword)
  }

  return {
    viewPassword,
    viewConfirmPassword,
    control,
    handleSubmit,
    handleSubmitForm,
    handleViewPassword,
    handleViewConfirmPassoword,
    handleViewNewPassword,
    viewNewPassword,
    iconsVerifyPassword,
    errors
  }
}