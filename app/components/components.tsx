import { router } from "expo-router";
import { useContext } from "react";
import { ActivityIndicator, StatusBar, View, Text } from "react-native";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import axios from "axios";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const StatusBars = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <StatusBar
      backgroundColor={theme.background}
      barStyle={isDarkMode ? "light-content" : "dark-content"}
    />
  );
};

export const loadAuthor = async (id: any) => {
  const authorData = await axios.get(`${commanApi}/user/get-all/${id}`);
  return authorData.data.data.Name;
};

export const commanApi = "http://192.168.1.82:4000/api";
// export const commanApi = 'http://localhost:4000/api'
//http://192.168.1.82:4000

export const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
export const nameRegex = /^[a-zA-Z\s]+$/;
export const passswordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
export const phoneNumberRegex = /^\d{10}$/;

export const ActivityIndicators = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <ActivityIndicator
      color="blue"
      size="large"
      style={{ flex: 1, backgroundColor: theme.background }}
    />
  );
};

export const ServerErrorView = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Icon name="flash-alert" color={"red"} size={100} />
      <Text style={{ color: "red", fontSize: 10 }}>
        Oops! Internal server error
      </Text>
    </View>
  );
};

export const NoDataNotificationView = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Icon name="bell-off-outline" color={theme.text} size={100} />
      <Text style={{ color: theme.text, fontSize: 10 }}>
        No notifications found
      </Text>
    </View>
  );
};

export const NoDataChatView = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Icon name="message-off-outline" color={theme.text} size={100} />
      <Text style={{ color: theme.text, fontSize: 10 }}>
        No Message found
      </Text>
    </View>
  );
};

export const NoDataCommentView = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Icon name="comment-off-outline" color={theme.text} size={100} />
      <Text style={{ color: theme.text, fontSize: 10 }}>
        No Message found
      </Text>
    </View>
  );
};

export const NoDataPostView = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Icon name="note-off-outline" color={theme.text} size={100} />
      <Text style={{ color: theme.text, fontSize: 10 }}>
        No Story found
      </Text>
    </View>
  );
};
