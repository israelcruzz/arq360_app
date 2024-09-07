import { useSignUpStepFor } from "./model"
import { SignUpStepForView } from "./view";

export const SignUpStepForViewModel = () => {
  const { subscriptionSelected, handleSelectSubscription, handleNextScreenClick } = useSignUpStepFor();

  return (
    <SignUpStepForView
      subscriptionSelected={subscriptionSelected}
      handleNextScreenClick={handleNextScreenClick}
      handleSelectSubscription={handleSelectSubscription}
    />
  );
}