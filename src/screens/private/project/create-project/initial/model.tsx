import { AppRootList } from "@/navigation/private/private.navigations";
import { CreateProjectRootList } from "@/navigation/private/project/create-project.navigation"
import { NavigationProp, useNavigation } from "@react-navigation/native"

export const useCreateProjectInitial = () => {
  const navigator = useNavigation<NavigationProp<AppRootList>>();

  const handleClickNextScreen = () => {
    navigator.navigate('createProjectFlow');
  }

  return {
    handleClickNextScreen
  }
}