import { useForgotPasswordStepFor } from "./model"
import { ForgotPasswordStepForView } from "./view";

export const ForgotPasswordStepForViewModel = () => {
  const data = useForgotPasswordStepFor();

  return <ForgotPasswordStepForView  />
}