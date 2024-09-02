import { createStackNavigator } from '@react-navigation/stack';
import { SignInView } from '~/screens/auth/sign-in/view';

export type AuthRootList = {
  signin: undefined;
};

const Stack = createStackNavigator<AuthRootList>();

export default function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName="signin">
      <Stack.Screen
        name="signin"
        component={SignInView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}