import { createStackNavigator } from '@react-navigation/stack';
import { SignInViewModel } from '~/screens/auth/sign-in/view-model';
import { SignUpStepOne } from '~/screens/auth/sign-up/step-one/view';

export type AuthRootList = {
  signin: undefined;
  signup: undefined;
};

const Stack = createStackNavigator<AuthRootList>();

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
        component={SignUpStepOne}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}