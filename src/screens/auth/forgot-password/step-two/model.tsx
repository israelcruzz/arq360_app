import { yupResolver } from '@hookform/resolvers/yup';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import * as Yup from 'yup';

import { AuthRootList } from '@/navigation/auth.navigation';

export const useForgotPasswordStepTwo = () => {
  const [timer, setTimer] = useState<number>(60);
  const [isResendTimerActive, setIsResendTimerActive] = useState<boolean>(false);
  const optRefs = useRef<any>([]);

  const otpSchema = Yup.object().shape({
    otp0: Yup.string()
      .length(1, 'Deve ter exatamente 1 caractere')
      .matches(/^[0-9]$/, 'Somente números são permitidos')
      .required('Campo obrigatório'),
    otp1: Yup.string()
      .length(1, 'Deve ter exatamente 1 caractere')
      .matches(/^[0-9]$/, 'Somente números são permitidos')
      .required('Campo obrigatório'),
    otp2: Yup.string()
      .length(1, 'Deve ter exatamente 1 caractere')
      .matches(/^[0-9]$/, 'Somente números são permitidos')
      .required('Campo obrigatório'),
    otp3: Yup.string()
      .length(1, 'Deve ter exatamente 1 caractere')
      .matches(/^[0-9]$/, 'Somente números são permitidos')
      .required('Campo obrigatório'),
    otp4: Yup.string()
      .length(1, 'Deve ter exatamente 1 caractere')
      .matches(/^[0-9]$/, 'Somente números são permitidos')
      .required('Campo obrigatório'),
  });

  type SubmitFormValidateData = Yup.InferType<typeof otpSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitFormValidateData>({
    resolver: yupResolver(otpSchema),
    defaultValues: {
      otp0: '',
      otp1: '',
      otp2: '',
      otp3: '',
      otp4: '',
    },
  });

  const navigation = useNavigation<NavigationProp<AuthRootList>>();

  const handleSubmitForm = (data: SubmitFormValidateData) => {
    navigation.navigate('forgotPasswordStepTree');
  };

  const handleResendCode = () => {
    setIsResendTimerActive(true);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isResendTimerActive && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsResendTimerActive(false);
      setTimer(60);
    }

    return () => clearInterval(intervalId);
  }, [isResendTimerActive, timer]);

  const opts = new Array(5).fill('');

  return {
    timer,
    isResendTimerActive,
    optRefs,
    control,
    handleSubmit,
    errors,
    handleSubmitForm,
    handleResendCode,
    opts,
  };
};
