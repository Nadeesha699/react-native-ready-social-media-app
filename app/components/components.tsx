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

export const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
export const nameRegex = /^[a-zA-Z\s]+$/;
export const passswordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
export const phoneNumberRegex = /^\d{10}$/;

export const ActivityIndicators = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <View style={{ backgroundColor: theme.background, flex: 1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"1%" }}>
      <ActivityIndicator color={theme.text} size="large" />
      <Text style={{color:theme.text}}>Loading...</Text>
    </View>
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
      <Icon name="flash-alert" color={"red"} size={50} />
      <Text style={{ color: "red", fontSize: 15 }}>
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
      <Icon name="bell-off-outline" color={theme.text} size={50} />
      <Text style={{ color: theme.text, fontSize: 15 }}>
        No notifications available
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
      <Icon name="chat-off-outline" color={theme.text} size={50} />
      <Text style={{ color: theme.text, fontSize: 15 }}>
        No messages available
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
      <Icon name="comment-off-outline" color={theme.text} size={50} />
      <Text style={{ color: theme.text, fontSize: 15 }}>
        No comments available
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
      <Icon name="file-document-outline" color={theme.text} size={50} />
      <Text style={{ color: theme.text, fontSize: 15 }}>
        No posts available
      </Text>
    </View>
  );
};

export const ActivityIndicatorsLogin = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <View style={{ backgroundColor: theme.background, flex: 1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"1%" }}>
      <ActivityIndicator color={theme.text} size="large" />
      <Text style={{color:theme.text}}>Logging...</Text>
    </View>
  );
};

export const ActivityIndicatorsSaving = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <View style={{ backgroundColor: theme.background, flex: 1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"1%" }}>
      <ActivityIndicator color={theme.text} size="large" />
      <Text style={{color:theme.text}}>Saving...</Text>
    </View>
  );
};
