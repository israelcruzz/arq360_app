import NetInfo from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';

import AuthNavigation from './auth.navigation';
import OnboardingNavigation from './onboarding-navigator';
import { AppNavigator } from './private/private.navigations';

import { useStorageAuth } from '@/hooks/auth-hooks/useStorageAuth';
import { useOnboarding } from '@/hooks/onboarding-hooks/useOnboarding';
import { NotConnectionView } from '@/screens/not-connection/view';

export const Router = () => {
  const { isOnboardingComplete, isLoading } = useOnboarding();
  const { user } = useStorageAuth();

  const [isConnected, setIsConnected] = useState<boolean | null>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  if (!isConnected) {
    return <NotConnectionView />;
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#000000" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {isOnboardingComplete ? (
        user ? (
          <>
            <AppNavigator />
            <Toast position="bottom" />
          </>
        ) : (
          <AuthNavigation />
        )
      ) : (
        <OnboardingNavigation />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
