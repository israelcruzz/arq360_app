import { NavigationProp, useNavigation } from "@react-navigation/native"
import { AuthRootList } from "~/navigation/auth.navigation"

export const useForgotPasswordStepFor = () => {
  const navigation = useNavigation<NavigationProp<AuthRootList>>();
  const handleNextScreen = () => {
    navigation.navigate('signIn')
  }

  return {
    handleNextScreen,
  }
}