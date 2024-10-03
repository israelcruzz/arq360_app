import { Text } from "react-native"
import { styles } from "./styles"

type HeadingTextPropsVariants = 'xs' | 'lg'

export interface HeadingTextProps {
  title: string,
  variant?: HeadingTextPropsVariants
}

export const HeadingText = ({ title, variant = "xs" }: HeadingTextProps) => {
  return (
    <Text style={[styles.textStyle, variant === 'xs' ? styles.textStyleXs : styles.textStyleLg]}>
      {title}
    </Text>
  );
}