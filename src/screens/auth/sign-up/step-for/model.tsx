import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert } from 'react-native';

import { useStorageAuth } from '@/hooks/auth-hooks/useStorageAuth';
import { AuthRootList } from '@/navigation/auth.navigation';

export const useSignUpStepFor = () => {
  const [subscriptionSelected, setSubscriptionSelected] = useState<string>();
  const navigation = useNavigation<NavigationProp<AuthRootList>>();

  const handleSelectSubscription = (subscriptionId: string) => {
    setSubscriptionSelected((prev) => {
      const verifySameSubscription = subscriptionId === prev;

      if (verifySameSubscription) return;

      return subscriptionId;
    });
  };

  const handleNextScreenClick = () => {
    const verifySubscriptionExists = subscriptionSelected === undefined;

    if (verifySubscriptionExists) {
      Alert.alert(
        'Selecione uma assinatura',
        'Você precisa selecionar uma assinatura para continuar'
      );
    }

    navigation.navigate('signIn');
  };

  return {
    subscriptionSelected,
    handleSelectSubscription,
    handleNextScreenClick,
  };
};
