import { useForgotPasswordStepOne } from "./model"
import { ForgotPasswordStepOneView } from "./view";

export const ForgotPasswordStepOneViewModel = () => {
  const {
    control,
    errors,
    handleSubmit,
    handleSubmitForm,
    iconsVerifyEmail,
    verifyEmail
  } = useForgotPasswordStepOne();

  return (
    <ForgotPasswordStepOneView
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      handleSubmitForm={handleSubmitForm}
      iconsVerifyEmail={iconsVerifyEmail}
      verifyEmail={verifyEmail}
    />
  );
}