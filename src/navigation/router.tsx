import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import AuthNavigation from './auth.navigation';
import OnboardingNavigation from './onboarding-navigator';

import { useOnboarding } from '~/hooks/onboarding-hooks/useOnboarding';

export const Router = () => {
  const { isOnboardingComplete } = useOnboarding();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      {isOnboardingComplete ? <AuthNavigation /> : <OnboardingNavigation />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});