import { useForgotPasswordStepTwo } from "./model"
import { ForgotPasswordStepTwoView } from "./view";

export const ForgotPasswordStepTwoViewModel = () => {
  const {
    control,
    errors,
    handleSubmit,
    handleSubmitForm,
    handleResendCode,
    isResendTimerActive,
    optRefs,
    timer,
    opts
  } = useForgotPasswordStepTwo();

  return (
    <ForgotPasswordStepTwoView
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      handleSubmitForm={handleSubmitForm}
      handleResendCode={handleResendCode}
      isResendTimerActive={isResendTimerActive}
      optRefs={optRefs}
      timer={timer}
      opts={opts}
    />
  );
}