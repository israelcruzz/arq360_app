import { Text, TextProps } from "react-native"
import { styles } from "@/components/description-text/styles";

export interface DescriptionTextProps extends TextProps {
  text: string
}

export const DescriptionText = ({ text, style, ...props }: DescriptionTextProps) => {
  return <Text style={[styles.textStyle, style]} {...props}>{text}</Text>
}