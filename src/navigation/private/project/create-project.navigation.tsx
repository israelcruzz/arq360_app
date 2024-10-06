import { createStackNavigator } from "@react-navigation/stack";
import { CreateProjectStepOneViewModel } from "@/screens/private/project/create-project/step-one/view-model";
import { CreateProjectStepTwoViewModel } from "@/screens/private/project/create-project/step-two/view-model";
import { CreateProjectStepTreeViewModel } from "@/screens/private/project/create-project/step-tree/view-model";
import { CreateProjectStepSuccessViewModel } from "@/screens/private/project/create-project/success/view-model";

export type CreateProjectRootList = {
  createProjectStepOne: undefined;
  createProjectStepTwo: undefined;
  createProjectStepTree: undefined;
  createProjectStepSuccess: undefined;
}

const Stack = createStackNavigator<CreateProjectRootList>();

export const CreateProjectNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="createProjectStepOne"
      screenOptions={{ animationEnabled: false, headerShown: false }}>
      <Stack.Screen name="createProjectStepOne" component={CreateProjectStepOneViewModel} />
      <Stack.Screen name="createProjectStepTwo" component={CreateProjectStepTwoViewModel} />
      <Stack.Screen name="createProjectStepTree" component={CreateProjectStepTreeViewModel} />
      <Stack.Screen name="createProjectStepSuccess" component={CreateProjectStepSuccessViewModel} />
    </Stack.Navigator>
  )
}