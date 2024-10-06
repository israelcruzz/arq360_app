import { createStackNavigator } from "@react-navigation/stack";
import { CreateProjectNavigation } from "@/navigation/private/project/create-project.navigation";
import { PrivateTabNavigation } from "@/navigation/private-tab-navigation";
import { ProjectNavigation } from "./project/project.navigation";


export type AppRootList = {
  tabs: undefined; 
  createProjectFlow: undefined;
  viewProjectFlow: undefined
};

const Stack = createStackNavigator<AppRootList>();

export const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="tabs" component={PrivateTabNavigation} />
    <Stack.Screen name="createProjectFlow" component={CreateProjectNavigation} />
    <Stack.Screen name="viewProjectFlow" component={ProjectNavigation} />
  </Stack.Navigator>
);
