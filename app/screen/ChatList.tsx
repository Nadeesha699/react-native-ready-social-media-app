import { useContext, useEffect, useState } from "react";
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");

import { NavigationProp } from "@react-navigation/native";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import { styles } from "@/css/main";
import axios from "axios";
import {
  ActivityIndicators,
  commanApi,
  NoDataChatView,
  ServerErrorView,
} from "../components/components";
import messageJson from "../Json/messageJson.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const ChatList: React.FC<TestScreenProps> = ({ navigation }) => {
  // const ChatList = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [searchIconChange, setSearchIconChange] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [chatListData, setChatListData] = useState(messageJson);
  const [waiting, setWaiting] = useState(true);
  const [noDataFound, setNoDataFound] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [ccid, setCCId] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const id = await AsyncStorage.getItem("Id");
        let ids = Number(id);
        setCCId(ids);
        const resp = await axios.get(
          `${commanApi}/messages/get-all-converstion/${ids}`
        );
        if (resp.data.data.length !== 0) {
          setChatListData(resp.data.data);
          setWaiting(false);
        } else {
          setNoDataFound(true);
          setWaiting(false);
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
      {waiting ? (
        <ActivityIndicators />
      ) : noDataFound ? (
        <NoDataChatView />
      ) : serverError ? (
        <ServerErrorView />
      ) : (
        // <View style={{ flexDirection: "column", flex: 1, overflowY: "scroll" }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          {chatListData
            .filter((e) =>
              e.Participant.Name.toLowerCase().includes(
                searchText.toLowerCase()
              )
            )
            .map((e, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={async () => {
                    const cid = e.CreaterId;
                    await AsyncStorage.setItem("CId", cid.toString());
                    const fid = e.ForId;
                    await AsyncStorage.setItem("FId", fid.toString());
                    await AsyncStorage.setItem("change", "1");
                    await axios.put(`${commanApi}/messages/read/by-id/${e.Id}`);
                    navigation.navigate("UserMessage");
                  }}
                  style={styles.chatlist_card}
                >
                  <Image
                    source={
                      e.Participant.ProfileImage
                        ? {
                            uri: `data:image/jpeg;base64,${e.Participant.ProfileImage}`,
                          }
                        : require("@/assets/images/21666259.jpg")
                    }
                    style={styles.chatlist_img_1}
                  />
                  <View style={styles.chatlist_view_1}>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={[styles.home_txt_7, { color: theme.text }]}
                    >
                      {e.Creator.Id === ccid
                        ? e.Participant.Name
                        : e.Creator.Name}
                    </Text>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{ color: theme.text }}
                    >
                      {e.Message.map((e1) => e1.Message)}
                    </Text>
                  </View>
                  <Text style={styles.chatlist_txt_1}>
                    {e.Message.map((e1) => {
                      const date = new Date(e1.createAt);
                      const hours = date.getHours() % 12 || 12;
                      const minutes = date
                        .getMinutes()
                        .toString()
                        .padStart(2, "0");
                      const ampm = date.getHours() >= 12 ? "PM" : "AM";
                      return `${hours}:${minutes} ${ampm}`;
                    }).join(", ")}{" "}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
        // </View>
      )}
    </View>
  );
};

export default ChatList;
