import React, { useEffect, useState } from "react"
import { OnboardingContext } from "./onboarding-context"
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface IOnboardingProvider {
  children: React.ReactNode
}

export const OnboardingProvider = ({ children }: IOnboardingProvider) => {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState<boolean>(false);
  
  useEffect(() => {
    const verifyIsBoardComplete = async () => {
      try {
        const verify = await AsyncStorage.getItem('@arq360/onboarding');
        setIsOnboardingComplete(verify !== null ? JSON.parse(verify) : false);
      } catch (error) {
        console.log(error);
      }
    }

    verifyIsBoardComplete();
  }, [])

  const save = async () => {
    try {
      await AsyncStorage.setItem('@arq360/onboarding', JSON.stringify(true));
      setIsOnboardingComplete(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <OnboardingContext.Provider value={{ isOnboardingComplete, save }}>
      {children}
    </OnboardingContext.Provider>
  )
}