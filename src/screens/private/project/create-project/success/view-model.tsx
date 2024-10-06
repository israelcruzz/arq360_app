import { useCreateProjectStepSuccess } from "./model"
import { CreateProjectStepSuccessView } from "./view";

export const CreateProjectStepSuccessViewModel = () => {
  const { 
    handleClickNextScreen,
    handleClickViewProject
   } = useCreateProjectStepSuccess();

   return <CreateProjectStepSuccessView handleClickNextScreen={handleClickNextScreen} handleClickViewProject={handleClickViewProject} />
}