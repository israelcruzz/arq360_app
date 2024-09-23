import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import { CreateProjectStepOneView } from "~/screens/private/project/create-project/step-one/view";
import { CreateProjectStepTwoView } from "~/screens/private/project/create-project/step-two/view";

export type CreateProjectRootList = {
  createProjectStepOne: undefined;
  createProjectStepTwo: undefined;
  createProjectStepTree: undefined;
}

const Stack = createStackNavigator<CreateProjectRootList>();

export const CreateProjectNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="createProjectStepTwo"
      screenOptions={{ animationEnabled: false, headerShown: false }}>
      <Stack.Screen name="createProjectStepOne" component={CreateProjectStepOneView} />
      <Stack.Screen name="createProjectStepTwo" component={CreateProjectStepTwoView} />
    </Stack.Navigator>
  )
}