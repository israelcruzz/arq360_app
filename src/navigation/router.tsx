import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import AuthNavigation from './auth.navigation';
import OnboardingNavigation from './onboarding-navigator';
import { useOnboarding } from '~/hooks/onboarding-hooks/useOnboarding';
import { PrivateTabNavigation } from './private-tab-navigation';

export const Router = () => {
  const { isOnboardingComplete, isLoading } = useOnboarding();
  const isUserExists = true;

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#000000" />
      </View>
    )
  }

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