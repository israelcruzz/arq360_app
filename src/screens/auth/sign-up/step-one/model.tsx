import { Alert } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthRootList } from "@/navigation/auth.navigation";
import { iconsVerifyEmail } from "@/utils/records/icons-verify-email";

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

  const handleSubmitForm = (data: SubmitFormValidateData) => {
    handleClickNextScreen();
  }

  const navigation = useNavigation<NavigationProp<AuthRootList>>();

  const handleClickNextScreen = () => {
    navigation.navigate('signUpStepTwo');
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