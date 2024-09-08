import { useState } from "react";
import { Alert } from "react-native";

export const useSignUpStepFor = () => {
  const [subscriptionSelected, setSubscriptionSelected] = useState<string>();

  const handleSelectSubscription = (subscriptionId: string) => {
    setSubscriptionSelected((prev) => {
      const verifySameSubscription = subscriptionId === prev;

      if (verifySameSubscription) return

      return subscriptionId
    })
  }

  const handleNextScreenClick = () => {
    const verifySubscriptionExists = subscriptionSelected === undefined;

    if (verifySubscriptionExists) {
      Alert.alert(
        'Selecione uma assinatura',
        'Você precisa selecionar uma assinatura para continuar'
      );
      return;
    }
  }

  return {
    subscriptionSelected,
    handleSelectSubscription,
    handleNextScreenClick
  }
}