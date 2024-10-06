import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@/screens/private/home/view";
import { ExplorerView } from "@/screens/private/explorer/view";
import { ProfileView } from "@/screens/private/profile/view";
import { CopyPlus, GalleryVerticalEnd, House, UserRound } from "lucide-react-native";
import { CreateProjectStepOneView } from "@/screens/private/project/create-project/step-one/view";

export type PrivateRootList = {
  home: undefined;
  profile: undefined;
  explorer: undefined;
  createProject: undefined;
};

const Tab = createBottomTabNavigator<PrivateRootList>();


export const PrivateTabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="home" screenOptions={() => ({
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      headerShadowVisible: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: '#fff',
        elevation: 0,
        shadowOpacity: 0,
        borderTopWidth: 1,
        borderWidth: 1,
        borderColor: '#E8ECF4',
        height: 72,
      }
    })}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <House size={24} color="black" /> : <House size={24} color="gray" />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="explorer"
        component={ExplorerView}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <GalleryVerticalEnd size={24} color="black" /> : <GalleryVerticalEnd size={24} color="gray" />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="createProject"
        component={CreateProjectStepOneView}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <CopyPlus size={24} color="black" /> : <CopyPlus size={24} color="gray" />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileView}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <UserRound size={24} color="black" /> : <UserRound size={24} color="gray" />;
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
};