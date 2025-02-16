import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import Search from "../screen/Search";
import Upload from "../screen/Create";
import Message from "../screen/UserMessage";
import Notifications from "../screen/Notification";
import Profile from "../screen/Profile";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Dimensions, TouchableOpacity, Text } from "react-native";
import Create from "../screen/Create";
import ChatStack from "../Stack/ChatStack";
import NotificationStack from "../Stack/NotificationStack";
import ProfileStack from "../Stack/ProfileStack";
import { ThemeContext } from "../Theme/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../Theme/theme";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { commanApi } from "../components/components";

const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get("window");

const HomeNaviagte = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const [notificationCount, setNotificationCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);
  useEffect(() => {
    const loadData = async () => {
      const id = await AsyncStorage.getItem("Id");

      const resp = await axios.get(
        `${commanApi}/notification/all-count/by-id/${id}`
      );
      setNotificationCount(resp.data.data);

      const resp1 = await axios.get(
        `${commanApi}/messages//get-all-messages/${id}`
      );
      setMessageCount(resp1.data.data);
    };
    loadData();
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: theme.background },
      }}
    >
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
            ...(getFocusedRouteNameFromRoute(route) === "UserMessage" && {
              display: "none",
            }),
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="chat-outline" size={size} color={color} />
          ),
          tabBarBadge: messageCount,
        })}
      />
      <Tab.Screen
        name="Create story"
        component={Create}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStack}
        options={{
          tabBarBadge: notificationCount,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="bell-outline"
              size={size}
              color={color}
              onPress={async () => {
                const id = await AsyncStorage.getItem("Id");
                await axios.put(`${commanApi}/notification/read/by-id/${id}`);
              }}
            />
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
              ...(["Update Profile", "Story"].includes(focusedRoute) && {
                display: "none",
              }),
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
