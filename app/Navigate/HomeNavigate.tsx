import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Create from "../screen/Create";
import ChatStack from "../Stack/ChatStack";
import ProfileStack from "../Stack/ProfileStack";
import { ThemeContext } from "../Theme/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../Theme/theme";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { commanApi } from "../components/components";
import Notifications from "../screen/Notification";

const Tab = createBottomTabNavigator();

const HomeNaviagte = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const [notificationCount, setNotificationCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);
  useEffect(() => {
    loadData();
  }, []);

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
          tabBarBadge: messageCount !== 0 ? messageCount : undefined,
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
        component={Notifications}
        options={{
          tabBarBadge: notificationCount !== 0 ? notificationCount : undefined,
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
