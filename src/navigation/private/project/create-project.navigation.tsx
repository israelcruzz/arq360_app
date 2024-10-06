import { createStackNavigator } from "@react-navigation/stack";
import { CreateProjectStepSuccessView } from "@/screens/private/project/create-project/success/view";
import { CreateProjectStepOneView } from "@/screens/private/project/create-project/step-one/view";
import { CreateProjectStepTreeView } from "@/screens/private/project/create-project/step-tree/view";
import { CreateProjectStepTwoView } from "@/screens/private/project/create-project/step-two/view";

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
      initialRouteName="createProjectStepTree"
      screenOptions={{ animationEnabled: false, headerShown: false }}>
      <Stack.Screen name="createProjectStepOne" component={CreateProjectStepOneView} />
      <Stack.Screen name="createProjectStepTwo" component={CreateProjectStepTwoView} />
      <Stack.Screen name="createProjectStepTree" component={CreateProjectStepTreeView} />
      <Stack.Screen name="createProjectStepSuccess" component={CreateProjectStepSuccessView} />
    </Stack.Navigator>
  )
}