import { useForgotPasswordStepFor } from "@/screens/auth/forgot-password/step-for/model";
import { ForgotPasswordStepForView } from "./view";

export const ForgotPasswordStepForViewModel = () => {
  const { handleNextScreen } = useForgotPasswordStepFor();

  return <ForgotPasswordStepForView handleNextScreen={handleNextScreen} />
}