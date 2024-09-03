import { NavigationProp, useNavigation } from "@react-navigation/native"
import { useOnboarding } from "~/hooks/onboarding-hooks/useOnboarding";
import { OnBoardingRootList } from "~/navigation/onboarding-navigator";

export const useOnboardingOne = () => {
  const navigation = useNavigation<NavigationProp<OnBoardingRootList>>();
  const onboardingStore = useOnboarding();

  const handleClickNextButton = () => {
    navigation.navigate('OnboardingTwo');
  }

  const handleClickSkipButton = async () => {
    await onboardingStore.save();
  }

  const handlePrevScreen = () => {
    navigation.navigate('OnboardingTwo');
  }


  return {
    handleClickNextButton,
    handleClickSkipButton,
    handlePrevScreen
  }
}