import { createStackNavigator } from "@react-navigation/stack";
import { useMemo, useRef } from "react";
import { Text } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import 'react-native-reanimated';


export type ProjectRootList = {
  viewProject: undefined;
}

const Stack = createStackNavigator<ProjectRootList>();

const ViewProject = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['30', '50', '100'], []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheet
        snapPoints={snapPoints}
        ref={bottomSheetRef}
      >
        <BottomSheetView>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  )
}

export const ProjectNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="viewProject"
      screenOptions={{ animationEnabled: false, headerShown: false }}>
      <Stack.Screen name="viewProject" component={ViewProject} />
    </Stack.Navigator>
  )
}