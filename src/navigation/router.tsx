import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import AuthNavigation from './auth.navigation';
import OnboardingNavigation from './onboarding-navigator';
import { useOnboarding } from '@/hooks/onboarding-hooks/useOnboarding';
import NetInfo from '@react-native-community/netinfo';
import { NotConnectionView } from '@/screens/not-connection/view';
import { useEffect, useState } from 'react';
import { PrivateTabNavigation } from "@/navigation/private-tab-navigation";
import { AppNavigator } from './private/private.navigations';

export const Router = () => {
  const { isOnboardingComplete, isLoading } = useOnboarding();
  const isUserExists = true;

  const [isConnected, setIsConnected] = useState<boolean | null>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  if (!isConnected) {
    return <NotConnectionView />
  }

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
          <AppNavigator />
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