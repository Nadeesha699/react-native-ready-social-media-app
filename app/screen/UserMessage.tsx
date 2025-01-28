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

const messageData = [
  { messsage: "Hello Patiyo", time: "20:27", cid: 1 },
  { messsage: "ow menika", time: "20:30", cid: 2 },
  { messsage: "Oya Mata Adareida", time: "20:31", cid: 1 },
  { messsage: "Ne raththrane", time: "20:45", cid: 2 },
  { messsage: "api thama yaluwa withari", time: "20:45", cid: 2 },
  { messsage: "Hmm", time: "20:55", cid: 1 },
  { messsage: "ai mokoda awulen wage", time: "21:05", cid: 2 },
  { messsage: "ne ne halo", time: "21:07", cid: 1 },
  { messsage: "duka hithunath mama kiwwe aththa", time: "21.:10", cid: 2 },
  { messsage: "Hmm", time: "21.15", cid: 1 },
  { messsage: "Oya Mata Adareida", time: "20:31", cid: 1 },
  { messsage: "Ne raththrane", time: "20:45", cid: 2 },
  { messsage: "api thama yaluwa withari", time: "20:45", cid: 2 },
  { messsage: "Hmm", time: "20:55", cid: 1 },
  { messsage: "ai mokoda awulen wage", time: "21:05", cid: 2 },
  { messsage: "ne ne halo", time: "21:07", cid: 1 },
  { messsage: "duka hithunath mama kiwwe aththa", time: "21.:10", cid: 2 },
  { messsage: "Hmm", time: "21.15", cid: 1 },
  { messsage: "Oya Mata Adareida", time: "20:31", cid: 1 },
  { messsage: "Ne raththrane", time: "20:45", cid: 2 },
  { messsage: "api thama yaluwa withari", time: "20:45", cid: 2 },
  { messsage: "Hmm", time: "20:55", cid: 1 },
  { messsage: "ai mokoda awulen wage", time: "21:05", cid: 2 },
  { messsage: "ne ne halo", time: "21:07", cid: 1 },
  { messsage: "duka hithunath mama kiwwe aththa", time: "21.:10", cid: 2 },
  { messsage: "Hmm", time: "21.15", cid: 1 },
];

import { NavigationProp } from "@react-navigation/native";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import { styles } from "@/css/main";
import axios from "axios";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

// const UserMessages: React.FC<TestScreenProps> = ({ navigation }) => {
  const UserMessages = () => {
  const scrollViewRef = useRef<ScrollView | null>(null);

  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [messageDatas, setMessageData] = useState([
    {
      Id: 1,
      SenderId: 0,
      RecieverId: 0,
      ListId: 0,
      MessageText: "",
      createAt: "",
      updateAt: "",
    },
  ]);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }

    const loadData = async () => {
      const resp = await axios.get(
        "http://localhost:4000/api/messages/get-single-chat/by-id/7/12"
      );

      setMessageData(resp.data.data)
    };
    loadData();
  }, []);

  return (
    <View
      style={[styles.message_container, { backgroundColor: theme.background }]}
    >
      <View style={styles.message_header}>
        <TouchableOpacity
          onPress={() => {
            // navigation.goBack();
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
        {messageDatas.map((e, index) => {
          return (
            <View
              key={index}
              style={[
                styles.message_body_1,
                { alignItems: e.SenderId ===7 ? "flex-end" : "flex-start" },
              ]}
            >
              <View
                style={[
                  styles.message_card,
                  {
                    backgroundColor: e.SenderId === 7 ? "#d7d7d7" : "#b9d7ff",
                    borderTopLeftRadius: e.SenderId === 7 ? width * 0.02 : 0,
                    borderTopRightRadius: e.SenderId === 7 ? 0 : width * 0.02,
                    marginLeft: e.SenderId === 7 ? width * 0.02 : 0,
                    marginRight: e.SenderId === 7 ? 0 : width * 0.02,
                  },
                ]}
              >
                <Text style={styles.setting_txt_1}>{e.MessageText}</Text>
                <Text style={styles.message_txt}>{e.createAt}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <TextInput
        style={[styles.message_footer, { backgroundColor: theme.background }]}
        placeholder="Message"
        right={
          <TextInput.Icon
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
