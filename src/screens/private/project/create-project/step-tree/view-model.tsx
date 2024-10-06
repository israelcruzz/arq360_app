import { useCreateProjectStepTree } from "./model";
import { CreateProjectStepTreeView } from "./view";

export const CreateProjectStepTreeViewModel = () => {
  const {
    addClientModal,
    addedClientImage,
    control,
    errors,
    formatInputPhone,
    handleChangeTextQuery,
    handleSubmitClientForm,
    removeClientModal,
    handleDesactiveAddClientModal,
    handleActiveAddClientModal,
    handleDesactiveRemoveClientModal,
    handlePickerClientImage,
    handleRemoveAddedClientImage,
    handleRemoveSelectedClient,
    handleSelectClient,
    handleSubmit,
    selectedClient,
    handleClickNextScreen
  } = useCreateProjectStepTree();

  return (
    <CreateProjectStepTreeView
      addClientModal={addClientModal}
      addedClientImage={addedClientImage}
      control={control}
      errors={errors}
      formatInputPhone={formatInputPhone}
      handleChangeTextQuery={handleChangeTextQuery}
      handleSubmitClientForm={handleSubmitClientForm}
      removeClientModal={removeClientModal}
      handleDesactiveAddClientModal={handleDesactiveAddClientModal}
      handleActiveAddClientModal={handleActiveAddClientModal}
      handleDesactiveRemoveClientModal={handleDesactiveRemoveClientModal}
      handlePickerClientImage={handlePickerClientImage}
      handleRemoveAddedClientImage={handleRemoveAddedClientImage}
      handleRemoveSelectedClient={handleRemoveSelectedClient}
      handleSelectClient={handleSelectClient}
      handleSubmit={handleSubmit}
      selectedClient={selectedClient}
      handleClickNextScreen={handleClickNextScreen}
    />
  );

}