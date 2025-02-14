import { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import { styles } from "@/css/main";
import axios from "axios";
import {
  ActivityIndicators,
  commanApi,
  NoDataNotificationView,
  ServerErrorView,
} from "../components/components";
import notificationJson from "../Json/notificationJson.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Notifications = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const [notificationData, setNotificationData] = useState(notificationJson);
  const [waiting, setWaiting] = useState(true);
  const [noDataFound, setNoDataFound] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [uid, setUid] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const id = await AsyncStorage.getItem("Id");
      setUid(parseInt(id ?? "0")); 
        const resp = await axios.get(`${commanApi}/notification/all/by-id/${uid}`);
        if (resp.data.data.length !== 0) {
          setNotificationData(resp.data.data);
          setWaiting(false);
        } else {
          setWaiting(false);
          setNoDataFound(true);
        }
      } catch (e) {
        console.log(e);
        setWaiting(false);
        setServerError(true);
      }
    };
    loadData();
  }, []);
  return (
    <View
      style={[
        styles.notification_container,
        { backgroundColor: theme.background },
      ]}
    >
      <Text style={[styles.notification_txt_1, { color: theme.text }]}>
        Notification
      </Text>
      {waiting ? (
        <ActivityIndicators />
      ) : serverError ? (
        <ServerErrorView />
      ) : noDataFound ? (
        <NoDataNotificationView />
      ) : (
         <ScrollView
                  style={{ flex: 1 }}
                  contentContainerStyle={{
                    flexGrow: 1,
                    gap:"1%"
                  }}
                >
          {notificationData.map((e, index) => {
            return (
              <TouchableOpacity key={index} style={styles.notification_card}>
                <ImageBackground
                  source={{
                    uri: `data:image/jpeg;base64,${e.User.ProfileImage}`,
                  }}
                  style={styles.notification_img_1}
                />
                <View style={styles.notification_view_1}>
                  {e.NotificationType.toLowerCase() === "follow" ? (
                    <Text style={{ color: theme.text }}>
                      <Text style={styles.notification_txt_2}>
                        {e.User.Name}
                      </Text>
                      started following you
                    </Text>
                  ) : e.NotificationType.toLowerCase() === "like" ? (
                    <Text style={{ color: theme.text }}>
                      <Text style={styles.notification_txt_2}>
                        {e.User.Name}
                      </Text>
                      liked your story: {e.Story.Tittle}
                    </Text>
                  ) : e.NotificationType.toLowerCase() === "upload" ? (
                    <Text style={{ color: theme.text }}>
                      <Text style={styles.notification_txt_2}>
                        {e.User.Name}
                      </Text>
                      uploaded a new story: {e.Story.Tittle}
                    </Text>
                  ) : e.NotificationType.toLowerCase() === "comment" ? (
                    <Text style={{ color: theme.text }}>
                      <Text style={styles.notification_txt_2}>
                        {e.User.Name}
                      </Text>
                      commented on your story {e.Story.Tittle}
                      {e.Comment.Comment}
                    </Text>
                  ) : (
                    ""
                  )}
                </View>
                {e.NotificationType.toLowerCase() !== "follow" ? (
                  <ImageBackground
                    source={{ uri: `data:image/jpeg;base64,${e.Story.Image}` }}
                    style={styles.notification_img_2}
                  />
                ) : (
                  ""
                )}
              </TouchableOpacity>
            );
          })}
          </ScrollView>
      )}
    </View>
  );
};

export default Notifications;
