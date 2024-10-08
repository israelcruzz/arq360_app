import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-reanimated';
import { ViewProjectView } from '@/screens/private/project/view-project/view';
import { RouteProp } from '@react-navigation/native';
import { AppRootList } from '../private.navigations';
import { ViewProjectViewModel } from '@/screens/private/project/view-project/view-model';
import { ViewConvenientView } from '@/screens/private/convenient/view-convenient/view';

export type ProjectRootList = {
  viewProject: { projectId: string };
  convenient: undefined;
};

const Stack = createStackNavigator<ProjectRootList>();

export type ProjectViewProps = RouteProp<ProjectRootList, 'viewProject'>;
export interface ProjectNavigationProps {
  route: RouteProp<AppRootList, 'viewProjectFlow'>;
}

export const ProjectNavigation = ({ route }: ProjectNavigationProps) => {
  const { projectId } = route.params;

  return (
    <Stack.Navigator
      initialRouteName="viewProject"
      screenOptions={{ animationEnabled: false, headerShown: false }}>
      <Stack.Screen
        name="viewProject"
        component={ViewProjectViewModel}
        initialParams={{ projectId }}
      />
      <Stack.Screen
        name="convenient"
        component={ViewConvenientView}
      />
    </Stack.Navigator>
  );
};
