import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';

export type PrivateRootList = {
  home: undefined;
  profile: undefined;
  explorer: undefined;
  createProject: undefined;
};

const Tab = createBottomTabNavigator<PrivateRootList>();

const Home = () => <Text>Home</Text>

const Profile = () => <Text>Profile</Text>

const Explorer = () => <Text>Explorer</Text>

const CreateProject = () => <Text>CreateProject</Text>

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
        borderTopWidth: 0,
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
            return focused ? <Feather name="home" size={24} color="black" /> : <Feather name="home" size={24} color="gray" />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="explorer"
        component={Explorer}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <Feather name="search" size={24} color="black" /> : <Feather name="search" size={24} color="gray" />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="createProject"
        component={CreateProject}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <Octicons name="diff-added" size={24} color="black" /> : <Octicons name="diff-added" size={24} color="gray" />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <Feather name="user" size={24} color="black" /> : <Feather name="user" size={24} color="gray" />;
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
};