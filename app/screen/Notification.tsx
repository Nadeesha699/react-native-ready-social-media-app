import { useContext } from "react";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import { styles } from "@/css/main";

const notificationData = [
  {
    notificationSender: "Saman Kumara",
    notificationType: "follow",
    uploadStoryName: "",
    uploadStoryCover: null,
    senderProfile: require("@/assets/images/40523.jpg"),
    senderComent: "",
  },
  {
    notificationSender: "Amal Kumara",
    notificationType: "like",
    uploadStoryName: "Wispering Librarry",
    uploadStoryCover: require("@/assets/images/3d-fantasy-scene.jpg"),
    senderProfile: require("@/assets/images/40523.jpg"),
    senderComent: "",
  },
  {
    notificationSender: "Piyal",
    notificationType: "upload",
    uploadStoryName: "Wispering Librarry",
    uploadStoryCover: require("@/assets/images/3d-fantasy-scene.jpg"),
    senderProfile: require("@/assets/images/40523.jpg"),
    senderComent: "",
  },
  {
    notificationSender: "Maree Silva",
    notificationType: "Comment",
    uploadStoryName: "Wispering Librarry",
    uploadStoryCover: require("@/assets/images/3d-fantasy-scene.jpg"),
    senderProfile: require("@/assets/images/40523.jpg"),
    senderComent: "Patta aa",
  },
];

const Notifications = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <View
      style={[styles.notification_container,{backgroundColor: theme.background}]}
    >
      <Text style={[styles.notification_txt_1,{color:theme.text }]}>
        Notification
      </Text>
      <View style={styles.notification_view_2}>
        {notificationData.map((e, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.notification_card}
            >
              <ImageBackground
                source={require("@/assets/images/40523.jpg")}
                style={styles.notification_img_1}
              />
              <View style={styles.notification_view_1}>
                {e.notificationType.toLowerCase() === "follow" ? (
                  <Text style={{color:theme.text}}>
                    <Text style={styles.notification_txt_2}>
                      {e.notificationSender}
                    </Text>
                    started following you
                  </Text>
                ) : e.notificationType.toLowerCase() === "like" ? (
                  <Text style={{color:theme.text}}>
                    <Text style={styles.notification_txt_2}>
                      {e.notificationSender}
                    </Text>
                    liked your story: {e.uploadStoryName}
                  </Text>
                ) : e.notificationType.toLowerCase() === "upload" ? (
                  <Text style={{color:theme.text}}>
                    <Text style={styles.notification_txt_2}>
                      {e.notificationSender}
                    </Text>
                    uploaded a new story: {e.uploadStoryName}
                  </Text>
                ) : e.notificationType.toLowerCase() === "comment" ? (
                  <Text style={{color:theme.text}}>
                    <Text style={styles.notification_txt_2}>
                      {e.notificationSender}
                    </Text>
                    commented on your story {e.uploadStoryName}
                    {e.senderComent}
                  </Text>
                ) : (
                  ""
                )}
              </View>
              {e.notificationType.toLowerCase() !== "follow" ? (
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
