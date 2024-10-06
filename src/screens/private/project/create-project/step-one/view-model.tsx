import { useCreateProjectStepOne } from './model';
import { CreateProjectStepOneView } from './view';

export const CreateProjectStepOneViewModel = () => {
  const {
    control,
    coverImageProject,
    errors,
    formatInputCep,
    handlePickImage,
    handleRemoveCoverImage,
    handleSubmit,
    handleSubmitForm,
  } = useCreateProjectStepOne();

  return (
    <CreateProjectStepOneView
      control={control}
      coverImageProject={coverImageProject}
      errors={errors}
      formatInputCep={formatInputCep}
      handlePickImage={handlePickImage}
      handleRemoveCoverImage={handleRemoveCoverImage}
      handleSubmit={handleSubmit}
      handleSubmitForm={handleSubmitForm}
    />
  );
};
