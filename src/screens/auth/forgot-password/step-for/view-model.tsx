import { useForgotPasswordStepFor } from "./model"
import { ForgotPasswordStepForView } from "./view";

export const ForgotPasswordStepForViewModel = () => {
  const { handleNextScreen } = useForgotPasswordStepFor();

  return <ForgotPasswordStepForView handleNextScreen={handleNextScreen} />
}