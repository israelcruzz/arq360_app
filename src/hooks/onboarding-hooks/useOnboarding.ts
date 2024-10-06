import { useContext } from 'react';
import { OnboardingContext } from '@/context/onboarding-context/onboarding-context';

export const useOnboarding = () => useContext(OnboardingContext)