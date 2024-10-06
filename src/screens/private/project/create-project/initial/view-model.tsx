import { useCreateProjectInitial } from "./model"
import { CreateProjectInitialView } from "./view";

export const CreateProjectInitialViewModel = () => {
  const { handleClickNextScreen } = useCreateProjectInitial();

  return <CreateProjectInitialView handleClickNextScreen={handleClickNextScreen}  />
}