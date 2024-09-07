import { useSignUpStepTree } from "./model"
import { SignUpStepTreeView } from "./view";

export const SignUpStepTreeViewModel = () => {
  const { handlePickImage, imageUri } = useSignUpStepTree();

  return <SignUpStepTreeView handlePickImage={handlePickImage} imageUri={imageUri}  />
}