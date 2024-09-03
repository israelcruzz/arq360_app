import { Text } from "react-native"
import { styles } from "./styles"

export interface HeadingTextProps {
  title: string
}

export const HeadingText = ({ title }: HeadingTextProps) => {
  return <Text style={styles.textStyle}>{title}</Text>
}