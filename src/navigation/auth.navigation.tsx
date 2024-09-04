import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import { SignInView } from '~/screens/auth/sign-in/view';

export type AuthRootList = {
  signin: undefined;
  signup: undefined;
};

const Stack = createStackNavigator<AuthRootList>();

const Testing = () => {
  return (
    <Text>a</Text>
  )
}

export default function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName="signin">
      <Stack.Screen
        name="signin"
        component={SignInView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        component={Testing}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}