import { useContext, useEffect, useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import { styles } from "@/css/main";
import axios from "axios";
import { commanApi } from "../components/components";
import notificationJson from "../Json/notificationJson.json"

const Notifications = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const [notificationData, setNotificationData] = useState(notificationJson);

  useEffect(() => {
    const loadData = async () => {
      const resp = await axios.get(
        `${commanApi}/notification/all/by-id/7`
      );
      setNotificationData(resp.data.data);
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
      <View style={styles.notification_view_2}>
        {notificationData.map((e, index) => {
          return (
            <TouchableOpacity key={index} style={styles.notification_card}>
              <ImageBackground
                source={require("@/assets/images/40523.jpg")}
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
                  source={require("@/assets/images/4977116.jpg")}
                  style={styles.notification_img_2}
                />
              ) : (
                ""
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Notifications;
