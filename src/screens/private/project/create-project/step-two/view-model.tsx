import { useCreateProjectStepTwo } from "@/screens/private/project/create-project/step-two/model";
import { CreateProjectStepTwoView } from "@/screens/private/project/create-project/step-two/view";

export const CreateProjectStepTwoViewModel = () => {
  const {
    control,
    coverImageProject,
    handlePickImage,
    handleRemoveCoverImage,
    handleSubmit,
    handleSubmitForm,
    addConvenientModal,
    convenientList,
    formState,
    handleActiveAddConvenientModal,
    handleDesactiveAddConvenientModal,
    errors,
    pickerItems,
    handleClickNextScreen
  } = useCreateProjectStepTwo();

  return (
    <CreateProjectStepTwoView
      control={control}
      coverImageProject={coverImageProject}
      addConvenientModal={addConvenientModal}
      convenientList={convenientList}
      handlePickImage={handlePickImage}
      handleRemoveCoverImage={handleRemoveCoverImage}
      handleSubmit={handleSubmit}
      handleSubmitForm={handleSubmitForm}
      formState={formState}
      handleActiveAddConvenientModal={handleActiveAddConvenientModal}
      handleDesactiveAddConvenientModal={handleDesactiveAddConvenientModal}
      errors={errors}
      pickerItems={pickerItems}
      handleClickNextScreen={handleClickNextScreen}
    />
  );
};
