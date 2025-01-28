import { useContext, useEffect, useState } from "react";
import { Image, TouchableOpacity, View, Text, Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");

const chatData = [
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Ruwan",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
];

import { NavigationProp } from "@react-navigation/native";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import { styles } from "@/css/main";
import axios from "axios";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const ChatList: React.FC<TestScreenProps> = ({ navigation }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [searchIconChange, setSearchIconChange] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [chatListData, setChatListData] = useState([
    {
      Id: 0,
      UserId: 0,
    },
  ]);

  useEffect(() => {
    const loadData = async () => {
      const resp = await axios.get(
        "http://localhost:4000/api/messages/get-all-list/7"
      );

      setChatListData(resp.data.data);
    };
    loadData();
  }, []);

  return (
    <View
      style={[styles.chatlist_container, { backgroundColor: theme.background }]}
    >
      <Text style={[styles.notification_txt_1, { color: theme.text }]}>
        Chat
      </Text>
      <TextInput
        value={searchText}
        style={styles.search_txt}
        placeholder="Find by name..."
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        mode="flat"
        onChangeText={(text) => {
          setSearchText(text);
          if (text.length !== 0) {
            setSearchIconChange(true);
          } else {
            setSearchIconChange(false);
          }
        }}
        right={
          <TextInput.Icon
            onPress={() => {
              setSearchText("");
              setSearchIconChange(false);
            }}
            icon={() => (
              <Icon
                name={searchIconChange ? "close" : "magnify"}
                size={width * 0.05}
              ></Icon>
            )}
          ></TextInput.Icon>
        }
      ></TextInput>
      <View style={{ flexDirection: "column", flex: 1, overflowY: "scroll" }}>
        {chatListData.
          filter((e) =>
            e.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((e, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate("UserMessage");
                }}
                style={styles.chatlist_card}
              >
                <Image
                  source={require("@/assets/images/40523.jpg")}
                  style={styles.chatlist_img_1}
                />
                <View style={styles.chatlist_view_1}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={[styles.home_txt_7, { color: theme.text }]}
                  >
                    {e.name}
                  </Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ color: theme.text }}
                  >
                    {e.message}
                  </Text>
                </View>
                <Text style={styles.chatlist_txt_1}>{e.time}</Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

export default ChatList;
