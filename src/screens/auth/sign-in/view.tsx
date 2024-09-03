import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { DescriptionText } from '~/components/description-text';
import { HeadingText } from '~/components/heading-text';

import { useEffect, useState } from 'react';
import { Input } from '~/components/input';

export const SignInView = () => {
  const [viewPassword, setViewPassoword] = useState<boolean>(true);
  const [verifyEmail, setVerifyEmail] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    if (text.length === 0) setViewPassoword(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const verify = emailRegex.test(email);

    setVerifyEmail(verify);
  }, [text, email]);

  return (
    <View style={styles.container}>
      <HeadingText title="Welcome Back" />
      <DescriptionText text="Your new password must be unique from those previously used." />
      <Input
        onChangeText={setEmail}
        placeholder="example@email.com"
        placeholderTextColor="#D1D1D1"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email">
        { verifyEmail ? <AntDesign name="checkcircle" size={20} color="#151515" /> :  <AntDesign name="checkcircle" size={24} color="#D1D1D1" />}
      </Input>
      <Input
        onChangeText={setText}
        secureTextEntry={viewPassword}
        placeholder="*********"
        placeholderTextColor="#D1D1D1">
        <TouchableOpacity onPress={() => setViewPassoword(!viewPassword)}>
          {viewPassword ? (
            <AntDesign name="eye" size={24} color="#D1D1D1" />
          ) : (
            <AntDesign name="eye" size={24} color="#151515" />
          )}
        </TouchableOpacity>
      </Input>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
});
