import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-reanimated';
import { ViewProjectView } from "@/screens/private/project/view-project/view";

export type ProjectRootList = {
  viewProject: undefined;
}

const Stack = createStackNavigator<ProjectRootList>();

export const ProjectNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="viewProject"
      screenOptions={{ animationEnabled: false, headerShown: false }}>
      <Stack.Screen name="viewProject" component={ViewProjectView} />
    </Stack.Navigator>
  )
}