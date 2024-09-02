import { useOnboardingTwo } from './model';
import { OnboardingTwoView } from './view';

export const OnboardingTwoViewModel = () => {
  const { handleClickNextButton, handleClickSkipButton } = useOnboardingTwo();

  return (
    <OnboardingTwoView
      handleClickNextButton={handleClickNextButton}
      handleClickSkipButton={handleClickSkipButton}
    />
  );
};