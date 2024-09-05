import { Text, TouchableOpacity, View } from 'react-native';
import { DescriptionText } from '~/components/description-text';
import { HeadingText } from '~/components/heading-text';
import { Controller } from 'react-hook-form';
import React from 'react';
import { Input } from '~/components/input';
import { Button } from '~/components/button';
import { Label } from '~/components/label';
import { TextLink } from '~/components/text-link';
import { styles } from './styles';
import { useSignIn } from './model';

export const SignInView = ({
  control,
  errors,
  handleSubmit,
  handleSubmitForm,
  handleViewPassword,
  navigateToForgotPassword,
  navigateToSignUp,
  iconsVerifyEmail,
  iconsVerifyPassword,
  verifyEmail,
  viewPassword,
}: ReturnType<typeof useSignIn>) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <HeadingText title="Bem vindo" />
        <DescriptionText text="Your new password must be unique from those previously used." />
      </View>

      <View style={styles.inputsArea}>
        <View>
          <Label title='E-mail' />
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
                {iconsVerifyEmail[String(verifyEmail)]}
              </Input>
            )}
          />
          {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
        </View>

        <View>
          <Label title='Senha' />
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
                isErrorValidate={!!errors.password}>
                <TouchableOpacity onPress={handleViewPassword}>
                  {iconsVerifyPassword[String(viewPassword)]}
                </TouchableOpacity>
              </Input>
            )}
          />
          {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
          <TextLink variant='primary' title='Esqueceu a senha?' style={styles.forgotPasswordText} onPress={navigateToForgotPassword} />
        </View>
      </View>


      <View style={styles.submitArea}>
        <Button text="Login" variant="primary" onPress={handleSubmit(handleSubmitForm)} />
        <View style={styles.dontHaveAccountArea}>
          <Text style={styles.textDontHaveAccount}>Você não possui uma conta?</Text>
          <TextLink variant='secondary' title='Cadastra-se' onPress={navigateToSignUp} />
        </View>
      </View>

    </View>
  );
};