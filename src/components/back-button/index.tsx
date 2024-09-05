import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native"
import { styles } from "./styles";

export const BackButton = () => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack()
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleBackButton}>
      <AntDesign name="left" size={24} color="#2A2A2A" />
    </TouchableOpacity>
  )
}