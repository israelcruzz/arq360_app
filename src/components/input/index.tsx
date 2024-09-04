import { Text, TextInput, TextInputProps, View } from 'react-native';
import { styles } from './styles';
import React from 'react';

export interface InputProps extends TextInputProps {
  children?: React.ReactNode;
  isErrorValidate?: boolean;
}

export const Input = ({ children, isErrorValidate, ...props }: InputProps) => {
  return (
    <View style={[styles.inputArea, isErrorValidate && styles.inputError]}>
      <TextInput {...props} style={styles.textInput} />
      {children}
    </View>
  );
};
