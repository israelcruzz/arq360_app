import { useOnboardingOne } from './model';
import { OnboardingOneView } from './view';

export const OnboardingOneViewModel = () => {
  const { handleClickNextButton, handleClickSkipButton } = useOnboardingOne();

  return (
    <OnboardingOneView
      handleClickNextButton={handleClickNextButton}
      handleClickSkipButton={handleClickSkipButton}
    />
  );
};