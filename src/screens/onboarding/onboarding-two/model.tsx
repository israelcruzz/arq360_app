import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useOnboarding } from '~/hooks/onboarding-hooks/useOnboarding';
import { OnBoardingRootList } from '~/navigation/onboarding-navigator';

export const useOnboardingTwo = () => {
  const onboardingStore = useOnboarding();
  const navigation = useNavigation<NavigationProp<OnBoardingRootList>>();

  const handleClickNextButton = async () => {
    await onboardingStore.save();
  };

  const handleClickSkipButton = async () => {
    await onboardingStore.save();
  };

  const handlePrevScreen = () => {
    navigation.navigate('OnboardingOne')
  }

  return {
    handleClickNextButton,
    handleClickSkipButton,
    handlePrevScreen,
  };
}