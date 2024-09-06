import { useSignUpStepTree } from "./model"
import { SignUpStepTreeView } from "./view";

export const SignUpStepTreeViewModel = () => {
  const { control, errors, handleSubmit, handleSubmitForm, iconsVerifyEmail, verifyEmail } = useSignUpStepTree();

  return <SignUpStepTreeView control={control} errors={errors} handleSubmit={handleSubmit} handleSubmitForm={handleSubmitForm} iconsVerifyEmail={iconsVerifyEmail} verifyEmail={verifyEmail} />
}