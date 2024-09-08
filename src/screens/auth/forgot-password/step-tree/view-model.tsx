import { useForgotPasswordStepTreeView } from "./model"
import { ForgotPasswordStepTreeView } from "./view";

export const ForgotPasswordStepTreeViewModel = () => {
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
  } = useForgotPasswordStepTreeView();

  return (
    <ForgotPasswordStepTreeView
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