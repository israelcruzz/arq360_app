import { createStackNavigator } from "@react-navigation/stack";
import { CreateProjectNavigation } from "@/navigation/private/project/create-project.navigation";
import { PrivateTabNavigation } from "@/navigation/private-tab-navigation";
import { ProjectNavigation } from "./project/project.navigation";
import { SettingsNavigation } from "./settings/settings.navigation";


export type AppRootList = {
  tabs: undefined; 
  createProjectFlow: undefined;
  viewProjectFlow: { projectId: string }
  settingsFlow: { screen: string }
};

const Stack = createStackNavigator<AppRootList>();

/**
 * The main navigator for the private part of the app.
 *
 * This navigator contains tabs (Home, Explorer and Profile) and separate
 * navigators for Create Project, View Project, and Settings.
 */
export const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="tabs" component={PrivateTabNavigation} />
    <Stack.Screen name="createProjectFlow" component={CreateProjectNavigation} />
    <Stack.Screen name="viewProjectFlow" component={ProjectNavigation} />
    <Stack.Screen name="settingsFlow" component={SettingsNavigation} />
  </Stack.Navigator>
);
