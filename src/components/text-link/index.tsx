import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';
import React from 'react';

export interface TextLinkProps extends TouchableOpacityProps {
  title: string,
  variant: 'primary' | 'secondary'
}

export const TextLink = ({ title, variant, ...props }: TextLinkProps) => {
  return (
    <TouchableOpacity activeOpacity={0.9} {...props}>
      <Text style={variant === 'primary' ? styles.primary : styles.secondary}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
