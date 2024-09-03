import { createContext } from "react";

export interface IOnboardingContext {
  save: () => Promise<void>;
  isOnboardingComplete: boolean;
}

export const OnboardingContext = createContext({} as IOnboardingContext);