import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

export interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary';
  text: string;
}

export const Button = ({ variant = 'primary', text, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.9}
      style={[
        styles.button,
        variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary,
      ]}>
      <Text
        style={[
          styles.textButton,
          variant === 'primary' ? styles.primaryTextButton : styles.secondaryTextButton,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
