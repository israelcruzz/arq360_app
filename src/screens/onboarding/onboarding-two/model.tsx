import { useOnboarding } from '~/hooks/onboarding-hooks/useOnboarding';

export const useOnboardingTwo = () => {
  const onboardingStore = useOnboarding();

  const handleClickNextButton = async () => {
    await onboardingStore.save();
  };

  const handleClickSkipButton = async () => {
    await onboardingStore.save();
  };

  return {
    handleClickNextButton,
    handleClickSkipButton,
  };
}