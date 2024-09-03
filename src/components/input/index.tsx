import { TextInput, TextInputProps, View } from 'react-native';
import { styles } from './styles';
import React from 'react';

export interface InputProps extends TextInputProps {
  children?: React.ReactNode
}

export const Input = ({ children, ...props }: InputProps) => {
  return (
    <View style={styles.inputArea}>
      <TextInput {...props} style={styles.textInput} />
      {children}
    </View>
  );
};
