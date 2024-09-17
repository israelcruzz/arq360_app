import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import AuthNavigation from './auth.navigation';
import OnboardingNavigation from './onboarding-navigator';

import { useOnboarding } from '~/hooks/onboarding-hooks/useOnboarding';
import { PrivateTabNavigation } from './private-tab-navigation';

export const Router = () => {
  const { isOnboardingComplete } = useOnboarding();
  const isUserExists = true;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      {isOnboardingComplete ? (
        isUserExists ? (
          <PrivateTabNavigation />
        ) : (
          <AuthNavigation />
        )
      ) : (
        <OnboardingNavigation />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
});