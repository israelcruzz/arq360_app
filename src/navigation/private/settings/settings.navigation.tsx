import { createStackNavigator } from "@react-navigation/stack";

export type SettingsRootList = {
  editInformation: undefined;
  changePassword: undefined;
  theme: undefined;
}

const Stack = createStackNavigator<SettingsRootList>();

const Example = () => <h1>a</h1>

export const SettingsNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="editInformation"
      screenOptions={{ animationEnabled: false, headerShown: false }}
    >
      <Stack.Screen name="editInformation" component={Example} />
    </Stack.Navigator>
  );
}