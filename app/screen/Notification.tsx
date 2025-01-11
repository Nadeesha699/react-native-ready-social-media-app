import { useContext } from "react";
import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";

const { width, height } = Dimensions.get("window");

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
    <View style={{flex: 0.1,padding: width * 0.02,gap: width*0.05,backgroundColor:theme.background}}>
      <Text style={{fontSize:width*0.075,fontWeight:"bold"}}>Notification</Text>
    <View style={{ flex: 0.9,gap: width*0.02 ,backgroundColor:theme.background}}>
      {notificationData.map((e,index) => {
        return (
          <TouchableOpacity
          key={index}
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: width * 0.02,
            }}
          >
            <ImageBackground
              source={require("@/assets/images/40523.jpg")}
              style={{
                width: width * 0.1,
                height: width * 0.1,
                overflow: "hidden",
                borderRadius: width * 0.1,
              }}
            />
            <View style={{width:"60%",flexDirection:"column"}}>
            {e.notificationType.toLowerCase() === "follow" ? (
              <Text><Text style={{fontWeight:"bold"}}>{e.notificationSender}</Text> started following you</Text>
            ) : e.notificationType.toLowerCase() === "like" ? (
              <Text>
                <Text style={{fontWeight:"bold"}}>{e.notificationSender}</Text> liked your story: {e.uploadStoryName}
              </Text>
            ) : e.notificationType.toLowerCase() === "upload" ? (
              <Text>
                <Text style={{fontWeight:"bold"}}>{e.notificationSender}</Text> uploaded a new story: {e.uploadStoryName}
              </Text>
            ) : e.notificationType.toLowerCase() === "comment" ? (
                <Text>
                <Text style={{fontWeight:"bold"}}>{e.notificationSender}</Text> commented on your story {e.uploadStoryName}: {e.senderComent}
              </Text>
            ) : (
              ""
            )}
           
            </View>
            {e.notificationType.toLowerCase() !== "follow" ? (
              <ImageBackground
                source={require("@/assets/images/4977116.jpg")}
                style={{ width: width*0.25, height: width*0.1,overflow:"hidden",borderRadius:width*0.01 }}
              />
            ) : (
              ""
            )}
          </TouchableOpacity>
        );
      })}
      {/* <TouchableOpacity
        style={{
          backgroundColor: "red",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: width * 0.02,
        }}
      >
        <ImageBackground
          source={require("@/assets/images/4977116.jpg")}
          style={{ width: 50, height: 50 }}
        />
        <Text>Nadeesha Ruwandima started following you</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: width * 0.02,
        }}
      >
        <ImageBackground
          source={require("@/assets/images/4977116.jpg")}
          style={{ width: 50, height: 50 }}
        />
        <Text>Saman liked your story: "Story Name"</Text>
        <ImageBackground
          source={require("@/assets/images/4977116.jpg")}
          style={{ width: 50, height: 50 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: width * 0.02,
        }}
      >
        <ImageBackground
          source={require("@/assets/images/4977116.jpg")}
          style={{ width: 50, height: 50 }}
        />
        <Text>Saman uploaded a new story: "Story Name"</Text>
        <ImageBackground
          source={require("@/assets/images/4977116.jpg")}
          style={{ width: 50, height: 50 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: width * 0.02,
        }}
      >
        <ImageBackground
          source={require("@/assets/images/4977116.jpg")}
          style={{ width: 50, height: 50 }}
        />
        <Text>Saman commented on your story: "Story Name"</Text>
        <Text> "This is an amazing story! Keep it up!"</Text>
        <ImageBackground
          source={require("@/assets/images/4977116.jpg")}
          style={{ width: 50, height: 50 }}
        />
      </TouchableOpacity> */}
    </View>
    </View>
  );
};

export default Notifications;
