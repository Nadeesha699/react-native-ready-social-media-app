import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import Search from "../screen/Search";
import Upload from "../screen/Upload";
import Message from "../screen/UserMessage";
import Notifications from "../screen/Notification";
import Profile from "../screen/Profile";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NotificationStack, ProfileStack, SearchStack, UploadStack } from "../Stack/ScreenStack";

const Tab = createBottomTabNavigator();

const HomeNaviagte = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
            tabBarStyle:{display:"none"}, 
          tabBarIcon: ({ color, size }) => (
            <Icon name="magnify" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="UploadStack"
        component={UploadStack}
        options={{
            tabBarStyle:{display:"none"}, 
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationStack"
        component={NotificationStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarStyle:{display:"none"},  
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNaviagte;
