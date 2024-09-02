import AuthNavigation from './auth.navigation';
import OnboardingNavigation from './onboarding-navigator';

import { useOnboarding } from '~/hooks/onboarding-hooks/useOnboarding';

export const Router = () => {
  const { isOnboardingComplete } = useOnboarding();

  return isOnboardingComplete ? <AuthNavigation /> : <OnboardingNavigation />
}