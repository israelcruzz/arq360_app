import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Router } from './router';

import { AuthProvider } from '@/context/auth-context/auth-provider';
import { OnboardingProvider } from '@/context/onboarding-context/onboarding-provider';

export type RootStackParamList = {
  TabNavigator: undefined;
  Modal: undefined;
  Onboarding: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <OnboardingProvider>
      <NavigationContainer>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </NavigationContainer>
    </OnboardingProvider>
  );
}
