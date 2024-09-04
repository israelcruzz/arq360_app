import AntDesign from '@expo/vector-icons/AntDesign';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { DescriptionText } from '~/components/description-text';
import { HeadingText } from '~/components/heading-text';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { Input } from '~/components/input';
import { Button } from '~/components/button';

const validateFormSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Campo obrigatório'),
});

export const SignInView = () => {
  const [viewPassword, setViewPassoword] = useState<boolean>(true);
  const [verifyEmail, setVerifyEmail] = useState<boolean>(false);

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

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setVerifyEmail(emailRegex.test(email));
  }, [email]);

  const uiElements: Record<string, React.ReactNode> = {
    true: <AntDesign name="eye" size={24} color="#D1D1D1" />,
    false: <AntDesign name="eye" size={24} color="#151515" />,
  };

  const uiElementsEmail: Record<string, React.ReactNode> = {
    true: <AntDesign name="checkcircle" size={20} color="#151515" />,
    false: <AntDesign name="checkcircle" size={20} color="#D1D1D1" />,
  };

  return (
    <View style={styles.container}>
      <HeadingText title="Welcome Back" />
      <DescriptionText text="Your new password must be unique from those previously used." />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="example@email.com"
            placeholderTextColor="#D1D1D1"
            keyboardType="email-address"
            autoCapitalize="none"
            isErrorValidate={!!errors.email}
            autoComplete="email">
            {uiElementsEmail[String(verifyEmail)]}
          </Input>
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            secureTextEntry={viewPassword}
            placeholder="*********"
            placeholderTextColor="#D1D1D1"
            isErrorValidate={!!errors.email}>
            <TouchableOpacity onPress={() => setViewPassoword(!viewPassword)}>
              {uiElements[String(viewPassword)]}
            </TouchableOpacity>
          </Input>
        )}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <Button text="Login" variant="primary" onPress={handleSubmit(handleSubmitForm)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  error: {
    color: 'red',
    paddingVertical: 4,
  },
});
