import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeViewModel } from "@/screens/private/home/view-model";
import { CopyPlus, GalleryVerticalEnd, House, UserRound } from "lucide-react-native";
import { CreateProjectInitialViewModel } from "@/screens/private/project/create-project/initial/view-model";
import { ProfileViewModal } from "@/screens/private/profile/view-modal";
import { ExplorerViewModel } from "@/screens/private/explorer/view-model";

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
        component={HomeViewModel}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <House size={24} color="black" /> : <House size={24} color="gray" />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="explorer"
        component={ExplorerViewModel}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <GalleryVerticalEnd size={24} color="black" /> : <GalleryVerticalEnd size={24} color="gray" />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="createProject"
        component={CreateProjectInitialViewModel}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <CopyPlus size={24} color="black" /> : <CopyPlus size={24} color="gray" />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileViewModal}
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