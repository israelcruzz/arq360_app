import { useChangePassword } from "./model"
import { ChangePasswordView } from "./view";

export const ChangePasswordViewModel = () => {
  const {
    control,
    errors,
    handleSubmit,
    handleSubmitForm,
    handleViewConfirmPassoword,
    handleViewPassword,
    handleViewNewPassword,
    iconsVerifyPassword,
    viewConfirmPassword,
    viewPassword,
    viewNewPassword,
  } = useChangePassword();

  return (
    <ChangePasswordView
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      handleSubmitForm={handleSubmitForm}
      handleViewConfirmPassoword={handleViewConfirmPassoword}
      handleViewPassword={handleViewPassword}
      iconsVerifyPassword={iconsVerifyPassword}
      viewConfirmPassword={viewConfirmPassword}
      viewPassword={viewPassword}
      viewNewPassword={viewNewPassword}
      handleViewNewPassword={handleViewNewPassword}
    />
  );
}