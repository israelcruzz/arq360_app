import { AppRootList } from "@/navigation/private/private.navigations";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export const useCreateProjectStepSuccess = () => {
  const navigator = useNavigation<NavigationProp<AppRootList>>();

  const handleClickNextScreen = () => {
    navigator.navigate('tabs');
  }

  const handleClickViewProject = () => {
    navigator.navigate('viewProjectFlow');
  }

  return {
    handleClickNextScreen,
    handleClickViewProject
  }
}