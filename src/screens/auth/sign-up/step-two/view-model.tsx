import { useSignUpStepTwo } from "./model"
import { SignUpStepTwoView } from "./view";

export const SignUpStepTwoViewModel = () => {
  const {
    control,
    errors,
    handleSubmit,
    handleSubmitForm,
    iconsVerifyEmail,
    handleViewConfirmPassoword,
    handleViewPassword,
    iconsVerifyPassword,
    viewConfirmPassword,
    viewPassword,
  } = useSignUpStepTwo();

  return (
    <SignUpStepTwoView
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      handleSubmitForm={handleSubmitForm}
      iconsVerifyEmail={iconsVerifyEmail}
      handleViewConfirmPassoword={handleViewConfirmPassoword}
      handleViewPassword={handleViewPassword}
      iconsVerifyPassword={iconsVerifyPassword}
      viewConfirmPassword={viewConfirmPassword}
      viewPassword={viewPassword}
    />
  );
}