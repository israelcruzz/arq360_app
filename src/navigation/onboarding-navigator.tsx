import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { OnboardingOneViewModel } from '~/screens/onboarding/onboarding-one/view-model';
import { OnboardingTwoViewModel } from '~/screens/onboarding/onboarding-two/view-model';

export type OnBoardingRootList = {
  OnboardingOne: undefined;
  OnboardingTwo: undefined;
};

const Stack = createStackNavigator<OnBoardingRootList>();

export default function OnboardingNavigation() {
  return (
    <Stack.Navigator initialRouteName="OnboardingOne" screenOptions={{ animationEnabled: false }}>
      <Stack.Screen
        name="OnboardingOne"
        component={OnboardingOneViewModel}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingTwo"
        component={OnboardingTwoViewModel}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}