import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";

export type CreateProjectRootList = {
  createProjectStepOne: undefined;
  createProjectStepTwo: undefined;
  createProjectStepTree: undefined;
}

const Stack = createStackNavigator<CreateProjectRootList>();

export const CreateProjectStepOne = () => {
  return <Text>StepOne</Text>
}

export const CreateProjectNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="createProjectStepOne"
      screenOptions={{ animationEnabled: false, headerShown: false }}>
      <Stack.Screen name="createProjectStepOne" component={CreateProjectStepOne} />
    </Stack.Navigator>
  )
}