import { createStackNavigator } from '@react-navigation/stack';
import { SignInViewModel } from '~/screens/auth/sign-in/view-model';
import { SignUpStepOneViewModel } from '~/screens/auth/sign-up/step-one/view-model';
import { SignUpStepTreeViewModel } from '~/screens/auth/sign-up/step-tree/view-model';
import { SignUpStepTwoViewModel } from '~/screens/auth/sign-up/step-two/view-model';

export type AuthRootList = {
  signIn: undefined;
  signUpStepOne: undefined;
  signUpStepTwo: undefined;
  signUpStepTree: undefined;
  signUpStepFor: undefined
};

const Stack = createStackNavigator<AuthRootList>();

export default function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName="signIn">
      <Stack.Screen
        name="signIn"
        component={SignInViewModel}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signUpStepOne"
        component={SignUpStepOneViewModel}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signUpStepTwo"
        component={SignUpStepTwoViewModel}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signUpStepTree"
        component={SignUpStepTreeViewModel}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}