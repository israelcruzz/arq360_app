import { Text } from "react-native"
import { styles } from "./styles"

export interface DescriptionTextProps {
  text: string
}

export const DescriptionText = ({ text }: DescriptionTextProps) => {
  return <Text style={styles.textStyle}>{text}</Text>
}