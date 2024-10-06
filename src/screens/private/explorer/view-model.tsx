import { useExplorer } from "./model"
import { ExplorerView } from "./view";

export const ExplorerViewModel = () => {
  const {
    activeBadge,
    addClientModal,
    addedClientImage,
    control,
    errors,
    formatInputPhone,
    handleActiveAddClientModal,
    handleActiveRemoveClientModal,
    handleChangeActiveBadge,
    handleChangeTextQuery,
    handleDesactiveAddClientModal,
    handleDesactiveRemoveClientModal,
    handlePickerClientImage,
    handleRemoveAddedClientImage,
    handleSubmit,
    handleSubmitClientForm,
    removeClientModal,
    handleClickViewProject
  } = useExplorer();

  return (
    <ExplorerView
      activeBadge={activeBadge}
      addClientModal={addClientModal}
      addedClientImage={addedClientImage}
      control={control}
      errors={errors}
      formatInputPhone={formatInputPhone}
      handleActiveAddClientModal={handleActiveAddClientModal}
      handleActiveRemoveClientModal={handleActiveRemoveClientModal}
      handleChangeActiveBadge={handleChangeActiveBadge}
      handleChangeTextQuery={handleChangeTextQuery}
      handleDesactiveAddClientModal={handleDesactiveAddClientModal}
      handleDesactiveRemoveClientModal={handleDesactiveRemoveClientModal}
      handlePickerClientImage={handlePickerClientImage}
      handleRemoveAddedClientImage={handleRemoveAddedClientImage}
      handleSubmit={handleSubmit}
      handleSubmitClientForm={handleSubmitClientForm}
      handleClickViewProject={handleClickViewProject}
      removeClientModal={removeClientModal}
    />
  );

}