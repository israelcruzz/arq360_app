import { useOnboardingOne } from './model';
import { OnboardingOneView } from './view';

export const OnboardingOneViewModel = () => {
  const { handleClickNextButton, handleClickSkipButton, handlePrevScreen } = useOnboardingOne();

  return (
    <OnboardingOneView
      handleClickNextButton={handleClickNextButton}
      handleClickSkipButton={handleClickSkipButton}
      handlePrevScreen={handlePrevScreen}
    />
  );
};