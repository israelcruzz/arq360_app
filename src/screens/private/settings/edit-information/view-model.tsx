import { useEditInformation } from "./model"
import { EditInformationView } from "./view";

export const EditInformationViewModel = () => {
  const { control, errors, handleSubmit, handleSubmitForm, iconsVerifyEmail, verifyEmail } = useEditInformation();

  return (
    <EditInformationView
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      handleSubmitForm={handleSubmitForm}
      iconsVerifyEmail={iconsVerifyEmail}
      verifyEmail={verifyEmail}
    />
  );
}