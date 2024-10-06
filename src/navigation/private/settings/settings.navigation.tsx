import { createStackNavigator } from "@react-navigation/stack";
import { ChangePasswordViewModel } from "@/screens/private/settings/change-password/view-model";
import { ChangeThemeViewModel } from "@/screens/private/settings/change-theme/view-model";
import { EditInformationViewModel } from "@/screens/private/settings/edit-information/view-model";

export type SettingsRootList = {
  editInformation: undefined;
  changePassword: undefined;
  changeTheme: undefined;
}

const Stack = createStackNavigator<SettingsRootList>();

export const SettingsNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="changeTheme"
      screenOptions={{ animationEnabled: false, headerShown: false }}
    >
      <Stack.Screen name="editInformation" component={EditInformationViewModel} />
      <Stack.Screen name="changePassword" component={ChangePasswordViewModel} />
      <Stack.Screen name="changeTheme" component={ChangeThemeViewModel} />
    </Stack.Navigator>
  );
}