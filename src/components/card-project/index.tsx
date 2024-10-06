import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"

import { styles } from "@/components/card-project/styles";
import { MapPin } from "lucide-react-native";

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
          <MapPin size={14} color="#666666" />
          <Text style={styles.cardProjectDetailsText}>{locate}</Text>
        </View>
      </View>

    </TouchableOpacity>
  )
}