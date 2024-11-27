import { useSignUpStepTree } from "./model"
import { SignUpStepTreeView } from "./view";

export const SignUpStepTreeViewModel = () => {
  const { handlePickImage, imageUri, handleClickNextScreen } = useSignUpStepTree();

  return <SignUpStepTreeView handleClickNextScreen={handleClickNextScreen} handlePickImage={handlePickImage} imageUri={imageUri}  />
}