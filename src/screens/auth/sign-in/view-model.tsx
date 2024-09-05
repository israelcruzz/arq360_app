import { useSignIn } from "./model"
import { SignInView } from "./view";

export const SignInViewModel = () => {
  const {
    control,
    errors,
    handleSubmit,
    handleSubmitForm,
    handleViewPassword,
    navigateToForgotPassword,
    navigateToSignUp,
    iconsVerifyEmail,
    iconsVerifyPassword,
    verifyEmail,
    viewPassword,
  } = useSignIn();

  return (
    <SignInView
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      handleViewPassword={handleViewPassword}
      handleSubmitForm={handleSubmitForm}
      iconsVerifyEmail={iconsVerifyEmail}
      iconsVerifyPassword={iconsVerifyPassword}
      verifyEmail={verifyEmail}
      viewPassword={viewPassword}
      navigateToForgotPassword={navigateToForgotPassword}
      navigateToSignUp={navigateToSignUp}
    />
  );
}