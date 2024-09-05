import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import { SignInView } from '~/screens/auth/sign-in/view';
import { SignInViewModel } from '~/screens/auth/sign-in/view-model';

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
        component={SignInViewModel}
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