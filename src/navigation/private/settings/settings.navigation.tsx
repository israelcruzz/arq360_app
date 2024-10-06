import { createStackNavigator } from "@react-navigation/stack";
import { ChangePasswordViewModel } from "~/screens/private/settings/change-password/view-model";
import { EditInformationViewModel } from "~/screens/private/settings/edit-information/view-model";

export type SettingsRootList = {
  editInformation: undefined;
  changePassword: undefined;
  theme: undefined;
}

const Stack = createStackNavigator<SettingsRootList>();

export const SettingsNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="changePassword"
      screenOptions={{ animationEnabled: false, headerShown: false }}
    >
      <Stack.Screen name="editInformation" component={EditInformationViewModel} />
      <Stack.Screen name="changePassword" component={ChangePasswordViewModel} />
    </Stack.Navigator>
  );
}