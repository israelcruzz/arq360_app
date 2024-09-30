import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";

export type ProjectRootList = {
  viewProject: undefined;
}

const Stack = createStackNavigator<ProjectRootList>();

const viewProject = () => {
  return <Text>Olá</Text>
}

export const ProjectNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="viewProject"
      screenOptions={{ animationEnabled: false, headerShown: false }}>
      <Stack.Screen name="viewProject" component={viewProject} />
    </Stack.Navigator>
  )
}