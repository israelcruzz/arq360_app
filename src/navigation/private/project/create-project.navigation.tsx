import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import { CreateProjectStepOneView } from "~/screens/private/project/create-project/step-one/view";

export type CreateProjectRootList = {
  createProjectStepOne: undefined;
  createProjectStepTwo: undefined;
  createProjectStepTree: undefined;
}

const Stack = createStackNavigator<CreateProjectRootList>();

export const CreateProjectNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="createProjectStepOne"
      screenOptions={{ animationEnabled: false, headerShown: false }}>
      <Stack.Screen name="createProjectStepOne" component={CreateProjectStepOneView} />
    </Stack.Navigator>
  )
}