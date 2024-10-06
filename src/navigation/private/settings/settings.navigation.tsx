import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
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
      initialRouteName="editInformation"
      screenOptions={{ animationEnabled: false, headerShown: false }}
    >
      <Stack.Screen name="editInformation" component={EditInformationViewModel} />
    </Stack.Navigator>
  );
}