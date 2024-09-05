import { useSignUpStepOne } from "./model"
import { SignUpStepOneView } from "./view";

export const SignUpStepOneViewModel = () => {
  const { control, errors, handleSubmit, handleSubmitForm, iconsVerifyEmail, verifyEmail } = useSignUpStepOne();

  return <SignUpStepOneView control={control} errors={errors} handleSubmit={handleSubmit} handleSubmitForm={handleSubmitForm} iconsVerifyEmail={iconsVerifyEmail} verifyEmail={verifyEmail} />
}