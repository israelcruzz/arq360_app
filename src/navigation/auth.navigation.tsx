import { createStackNavigator } from '@react-navigation/stack';
import { ForgotPasswordStepOneViewModel } from '~/screens/auth/forgot-password/step-one/view-model';
import { ForgotPasswordStepTwoViewModel } from '~/screens/auth/forgot-password/step-two/view-model';
import { SignInViewModel } from '~/screens/auth/sign-in/view-model';
import { SignUpStepForViewModel } from '~/screens/auth/sign-up/step-for/view-model';
import { SignUpStepOneViewModel } from '~/screens/auth/sign-up/step-one/view-model';
import { SignUpStepTreeViewModel } from '~/screens/auth/sign-up/step-tree/view-model';
import { SignUpStepTwoViewModel } from '~/screens/auth/sign-up/step-two/view-model';

export type AuthRootList = {
  signIn: undefined;
  signUpStepOne: undefined;
  signUpStepTwo: undefined;
  signUpStepTree: undefined;
  signUpStepFor: undefined;
  forgotPasswordStepOne: undefined;
  forgotPasswordStepTwo: undefined;
  forgotPasswordStepTree: undefined;
  forgotPasswordStepFor: undefined;
};

const Stack = createStackNavigator<AuthRootList>();

export default function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName="forgotPasswordStepTwo">
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
      <Stack.Screen
        name="signUpStepFor"
        component={SignUpStepForViewModel}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="forgotPasswordStepOne"
        component={ForgotPasswordStepOneViewModel}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="forgotPasswordStepTwo"
        component={ForgotPasswordStepTwoViewModel}
        options={{ headerShown: false }}
      />
      {/*
      <Stack.Screen
        name="forgotPasswordStepTree"
        component={SignUpStepForViewModel}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="forgotPasswordStepTree"
        component={SignUpStepForViewModel}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  )
}