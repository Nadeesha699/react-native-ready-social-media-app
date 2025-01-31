import { useContext, useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("window");

import { NavigationProp } from "@react-navigation/native";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import { styles } from "@/css/main";
import axios from "axios";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const UserMessages: React.FC<TestScreenProps> = ({ navigation }) => {
// const UserMessages = () => {
  const scrollViewRef = useRef<ScrollView | null>(null);

  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [messageTxt, setMessageTxt] = useState("");
  const [messageDatas, setMessageData] = useState([
    {
      Id: 0,
      CreaterId: 0,
      ForId: 0,
      Message: [
        {
          Id: 0,
          Message: "",
          createAt: "",
          updateAt: "",
          UserId: 0,
          ChatId: 0,
          read: false,
        },
      ],
      Creator: {
        Id: 0,
        Name: "",
        Email: "",
        PhoneNumber: "",
        Bio: "t",
        createAt: "",
        updateAt: "",
      },
      Participant: {
        Id: 0,
        Name: "",
        Email: "",
        PhoneNumber: "",
        Bio: "t",
        createAt: "",
        updateAt: "",
      },
    },
  ]);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }

    const loadData = async () => {
      const resp = await axios.get(
        "http://localhost:4000/api/messages/verifyConversation/7/12"
      );

      setMessageData(resp.data.data);
    };
    loadData();
  }, []);

  const formatTime = (time: any) => {
    const date = new Date(time);
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = date.getHours() >= 12 ? "PM" : "AM";
    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <View
      style={[styles.message_container, { backgroundColor: theme.background }]}
    >
      <View style={styles.message_header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="chevron-left" size={width * 0.1} color={theme.text} />
        </TouchableOpacity>
        <Text
          style={[styles.header_name, { color: theme.text }]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          Nadeesha Rwuandima
        </Text>
      </View>
      <ScrollView style={styles.message_body} ref={scrollViewRef}>
        {messageDatas.map((e) =>
          e.Message.map((e1, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.message_body_1,
                  { alignItems: e1.UserId === 7 ? "flex-end" : "flex-start" },
                ]}
              >
                <View
                  style={[
                    styles.message_card,
                    {
                      backgroundColor: e1.UserId === 7 ? "#d7d7d7" : "#b9d7ff",
                      borderTopLeftRadius: e1.UserId === 7 ? width * 0.02 : 0,
                      borderTopRightRadius: e1.UserId === 7 ? 0 : width * 0.02,
                      marginLeft: e1.UserId === 7 ? width * 0.02 : 0,
                      marginRight: e1.UserId === 7 ? 0 : width * 0.02,
                    },
                  ]}
                >
                  <Text style={styles.setting_txt_1}>{e1.Message}</Text>
                  <Text style={styles.message_txt}>
                    {formatTime(e1.createAt)}
                  </Text>
                </View>
              </View>
            );
          })
        )}
      </ScrollView>
      <TextInput
        style={[styles.message_footer, { backgroundColor: theme.background }]}
        placeholder="Message"
        value={messageTxt}
        onChangeText={(e) => {
          setMessageTxt(e);
        }}
        right={
          <TextInput.Icon
            onPress={async () => {
              const resp = await axios.post(
                "http://localhost:4000/api/messages/send",
                
                  {
                    Message: messageTxt,
                    UserId: 7,
                    ChatId: 5,
                  },
                
              );
              resp.data.success === true
                ? console.log("send")
                : console.log("unsend");
              setMessageTxt("")
            }}
            icon={() => (
              <Icon name="send" size={width * 0.06} color={theme.text} />
            )}
          />
        }
      />
    </View>
  );
};

export default UserMessages;
