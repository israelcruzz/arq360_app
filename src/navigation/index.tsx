import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './tab-navigator';
import Modal from '../screens/modal';
import OnboardingRoot from './onboarding-navigator';
import { OnboardingProvider } from '~/context/onboarding-context/onboarding-provider';
import { Router } from './router';

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
        <Router />
      </NavigationContainer>
    </OnboardingProvider>
  );
}
