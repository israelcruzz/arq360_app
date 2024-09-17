import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import { styles } from "./styles"

interface ClientLineProps extends TouchableOpacityProps {
  name: string;
  imageUri: string;
}

export const ClientLine = ({ name, imageUri, ...props }: ClientLineProps) => {
  return (
    <View style={styles.clientArea}>
      <View style={styles.clientAreaHeader}>
        <Image
          width={48}
          height={48}
          source={{ uri: imageUri }}
          style={styles.avatar}
        />

        <Text style={styles.clientNameText}>{name}</Text>
      </View>


      <TouchableOpacity style={styles.clientRemoveButton} {...props}>
        <Text style={styles.clientRemoveTextButton}>Remover</Text>
      </TouchableOpacity>
    </View>
  )
}