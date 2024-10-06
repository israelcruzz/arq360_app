import { Text, TextProps } from "react-native"
import { styles } from "@/components/heading-text/styles";

type HeadingTextPropsVariants = 'xs' | 'lg'

export interface HeadingTextProps extends TextProps {
  title: string,
  variant?: HeadingTextPropsVariants
}

export const HeadingText = ({ title, variant = "xs", style, ...props }: HeadingTextProps) => {
  return (
    <Text style={[styles.textStyle, style, variant === 'xs' ? styles.textStyleXs : styles.textStyleLg]} {...props}>
      {title}
    </Text>
  );
}