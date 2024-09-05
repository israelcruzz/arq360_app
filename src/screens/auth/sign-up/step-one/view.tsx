import { Text, TouchableOpacity, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "~/components/back-button";

export const SignUpStepOne = () => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View>
        <BackButton />
      </View>
    </View>
  )
}