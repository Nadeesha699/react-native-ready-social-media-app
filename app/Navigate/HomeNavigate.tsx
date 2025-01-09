import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import Search from "../screen/Search";
import Upload from "../screen/Create";
import Message from "../screen/UserMessage";
import Notifications from "../screen/Notification";
import Profile from "../screen/Profile";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  NotificationStack,
  ProfileStack,
  ChatStack,
} from "../Stack/TabStack"
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Dimensions, TouchableOpacity, Text } from "react-native";
import Create from "../screen/Create";

const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get("window");

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
        name="Chat"
        component={ChatStack}
        options={({ route }) => ({
          tabBarStyle: ((route) => {
            if (getFocusedRouteNameFromRoute(route) === "UserMessage") {
              return { display: "none" };
            }
            return;
          })(route),
          tabBarIcon: ({ color, size }) => (
            <Icon name="chat-outline" size={size} color={color} />
          ),
          tabBarBadge: 2,
        })}
      />
      <Tab.Screen
        name="Create story"
        component={Create}
        options={({ navigation }) => ({
          animation: "fade",
          headerShown: true,
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus-circle-outline" size={size} color={color} />
          ),
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold" },
          headerLeft: () => (
            <Icon
              style={{ padding: width * 0.02 }}
              name="close"
              size={width * 0.05}
              color="#ff005d"
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Text
                style={{
                  color: "#1178ff",
                  fontWeight: "bold",
                  padding: width * 0.02,
                }}
              >
                upload
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStack}
        options={{
          tabBarBadge: 10,
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={({ route }) => ({
          tabBarStyle: ((route) => {
            if (
              getFocusedRouteNameFromRoute(route) === "Update Profile" ||
              getFocusedRouteNameFromRoute(route) === "Story"
            ) {
              return { display: "none" };
            }
            return;
          })(route),
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-outline" size={size} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default HomeNaviagte;
