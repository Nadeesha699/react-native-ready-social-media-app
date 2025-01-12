import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import Search from "../screen/Search";
import Upload from "../screen/Create";
import Message from "../screen/UserMessage";
import Notifications from "../screen/Notification";
import Profile from "../screen/Profile";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { getFocusedRouteNameFromRoute, } from "@react-navigation/native";
import { Dimensions, TouchableOpacity, Text } from "react-native";
import Create from "../screen/Create";
import ChatStack from "../Stack/ChatStack";
import NotificationStack from "../Stack/NotificationStack";
import ProfileStack from "../Stack/ProfileStack";
import { ThemeContext } from "../Theme/ThemeContext";
import { useContext } from "react";
import { darkTheme, lightTheme } from "../Theme/theme";

const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get("window");

const HomeNaviagte = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <Tab.Navigator screenOptions={{ headerShown: false,tabBarStyle:{backgroundColor:theme.background} }}>
      <Tab.Screen
        name="Homes"
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
          tabBarStyle: {
            backgroundColor: theme.background,
            ...(getFocusedRouteNameFromRoute(route) === "UserMessage" && { display: "none" })
          },
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
          headerShown: true,
          headerStyle: { backgroundColor: theme.background },
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus-circle-outline" size={size} color={color} />
          ),
          headerTitleAlign: "center",
          headerTintColor: theme.text,
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
        options={({ route }) => {
          const focusedRoute = getFocusedRouteNameFromRoute(route) ?? "";
          return {
            tabBarStyle: {
              backgroundColor: theme.background,
              ...(["Update Profile", "Story"].includes(focusedRoute) && { display: "none" }),
            },
            tabBarIcon: ({ color, size }) => (
              <Icon name="account-outline" size={size} color={color} />
            ),
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNaviagte;
