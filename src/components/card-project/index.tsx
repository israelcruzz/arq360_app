import { FontAwesome6 } from "@expo/vector-icons"
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"

import { styles } from "@/components/card-project/styles";

interface CardProjectProps extends TouchableOpacityProps {
  imageUri: string,
  title: string,
  locate: string
}

export const CardProject = ({ imageUri, title, locate, ...props }: CardProjectProps) => {
  return (
    <TouchableOpacity style={styles.cardProjectArea} {...props}>
      <Image style={styles.cardProjectAreaImage} source={{ uri: imageUri }} />

      <View>
        <Text style={styles.cardProjectHeadingText}>{title}</Text>

        <View style={styles.cardProjectTextArea}>
          <FontAwesome6 name="location-dot" size={12} color="#666666" />
          <Text style={styles.cardProjectDetailsText}>{locate}</Text>
        </View>
      </View>

    </TouchableOpacity>
  )
}