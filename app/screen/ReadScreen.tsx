import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useRef } from "react";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  ToastAndroid,
  Alert,
} from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationProp } from "@react-navigation/native";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import { styles } from "@/css/main";
import axios from "axios";
import {
  commanApi,
  NoDataCommentView,
} from "../components/components";
import commentJson from "../Json/commentJson.json";
import followJson from "../Json/followJson.json";
import storySingleJson from "../Json/storySingleJson.json";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const { width } = Dimensions.get("window");

const ReadScreen: React.FC<TestScreenProps> = ({ navigation }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const [likeRed, setLikeRed] = useState(false);
  const [closeComment, setCloseComment] = useState(false);
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [commentData, setCommentData] = useState(commentJson);
  const [storyData, setStoryData] = useState(storySingleJson);
  const [followData, setFollowData] = useState(followJson);
  const [noDataFound, setNoDataFound] = useState(false);
  const [followStatus, setFollowStatus] = useState("FOLLOW");
  const [followButtonShow, setFollowButtonShow] = useState(true);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
    loadData();
  }, []);

  const loadData = async () => {
    const sid = await AsyncStorage.getItem("SId");
    const aid = await AsyncStorage.getItem("AId");
    const id = await AsyncStorage.getItem("Id");
    const resp3 = await axios.get(`${commanApi}/story/get-all/by-id/${sid}`);
    setStoryData(resp3.data.data);
    const resp = await axios.get(`${commanApi}/comment/all/by-id/${sid}`);
    resp.data.data.length !== 0
      ? setCommentData(resp.data.data)
      : setNoDataFound(true);
    const resp4 = await axios.get(
      `${commanApi}/follower/verify-follower/${id}/${aid}`
    );
    if (resp4.data.data[0]) {
      setFollowData(resp4.data.data[0]);
      if (resp4.data.data[0].FriendStatus) {
        setFollowStatus("FRIEND");
      } else {
        if (resp4.data.data[0].UserId === Number(id)) {
          setFollowStatus("FOLLOWING");
        } else {
          setFollowStatus("FOLLOW BACK");
        }
      }
    } else {
      setFollowStatus("FOLLOW");
    }
    const resp2 = await axios.get(`${commanApi}/like/verify/${sid}/${id}`);
    resp2.data.success ? setLikeRed(true) : setLikeRed(false);
    id === aid ? setFollowButtonShow(true) : setFollowButtonShow(false);
  };

  const timeFormat = (time: any) => {
    const date = new Date(time);
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = date.getHours() >= 12 ? "PM" : "AM";
    return `${hours}:${minutes} ${ampm}`;
  };

  const [commentTxt, setCommentTxt] = useState("");

  return (
    <View
      style={[
        styles.readscreen_container,
        { backgroundColor: theme.background },
      ]}
    >
      <ImageBackground
        style={styles.readscreen_header}
        source={{ uri: `data:image/jpeg;base64,${storyData.Image}` }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="chevron-left" size={width * 0.1} color={"white"} />
        </TouchableOpacity>
        <View style={styles.readscreen_con6}>
          <TouchableOpacity
            onPress={async () => {
              const sid = await AsyncStorage.getItem("SId");
              let a = Number(sid);
              const id = await AsyncStorage.getItem("Id");
              let b = Number(id);
              const aid = await AsyncStorage.getItem("AId");
              let c = Number(aid);
              if (likeRed) {
                const resp = await axios.delete(
                  `${commanApi}/like/remove/${a}/${b}`
                );
                resp.data.success ? setLikeRed(false) : setLikeRed(true);
              } else {
                const resp = await axios.post(`${commanApi}/like/add`, {
                  SenderId: b,
                  StoryId: a,
                });
                if (resp.data.success) {
                  await axios.post(`${commanApi}/notification/create`, {
                    SenderId: b,
                    RecieverId: c,
                    StoryId: a,
                    NotificationType: "LIKE",
                  });
                  setLikeRed(true);
                } else {
                  setLikeRed(false);
                }
              }
            }}
          >
            <Icon
              name={likeRed ? "thumb-up" : "thumb-up-outline"}
              size={width * 0.06}
              color={likeRed ? "red" : "white"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCloseComment(!closeComment);
            }}
          >
            <Icon
              name={"comment-outline"}
              size={width * 0.06}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.readscreen_body}>
        <View style={styles.readscreen_con8}>
          <View style={styles.readscreen_con7}>
            <Text
              style={[styles.readscreen_txt1, { color: theme.text }]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {storyData.Tittle}
            </Text>
            <TouchableOpacity
              onPress={async () => {
                navigation.navigate("User Profile");
              }}
            >
              <Text style={styles.readscreen_txt4}>{storyData.User.Name}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[
              styles.readscreen_follow_button,
              { display: followButtonShow ? "none" : "flex" },
            ]}
            onPress={async () => {
              const aid = await AsyncStorage.getItem("AId");
              let a = Number(aid);
              const id = await AsyncStorage.getItem("Id");
              let b = Number(id);
              if (followStatus === "FOLLOW") {
                await axios.post(`${commanApi}/follower/follow`, {
                  FollowerId: a,
                  UserId: b,
                  FriendStatus: false,
                });
                await axios.post(`${commanApi}/notification/create`, {
                  SenderId: b,
                  RecieverId: a,
                  NotificationType: "FOLLOW",
                });
              } else if (followStatus === "FOLLOWING") {
                await axios.delete(
                  `${commanApi}/follower/unfollow/${followData.Id}`
                );
              } else if (followStatus === "FRIEND") {
                await axios.put(
                  `${commanApi}/follower/follow-back/${followData.Id}`,
                  {
                    FriendStatus: false,
                  }
                );
              } else if (followStatus === "FOLLOW BACK") {
                await axios.put(
                  `${commanApi}/follower/follow-back/${followData.Id}`,
                  {
                    FriendStatus: true,
                  }
                );
              }
            }}
          >
            <Text style={[styles.readscreen_txt1, { color: "white" }]}>
              {followStatus.toLocaleLowerCase()}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{ flex: 0.5 }}>
          <Text style={styles.readscreen_txt3}>{storyData.Story}</Text>
        </ScrollView>
      </View>
      <View
        style={[
          styles.readscreen_comment_section,
          {
            top: closeComment ? 0 : width * 20,
          },
        ]}
      >
        <View style={styles.readscreen_dark_view} />
        <View
          style={{
            flex: 0.5,
            backgroundColor: theme.background,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <View
            style={[
              styles.comment_header,
              { backgroundColor: theme.background },
            ]}
          >
            <Text style={{ fontWeight: "bold", color: theme.text }}>
              Comments
            </Text>
            <TouchableOpacity
              onPress={() => {
                setCloseComment(!closeComment);
              }}
            >
              <Icon name="close" size={width * 0.1} color={theme.text} />
            </TouchableOpacity>
          </View>
          {noDataFound ? (
            <NoDataCommentView />
          ) : (
            <ScrollView
              style={[
                styles.comment_scroll,
                { backgroundColor: theme.background },
              ]}
              showsHorizontalScrollIndicator={false}
              ref={scrollViewRef}
            >
              {commentData.map((e, index) => {
                return (
                  <View key={index} style={styles.comment_card}>
                    <Image
                      source={
                        e.User.ProfileImage
                          ? {
                              uri: `data:image/jpeg;base64,${e.User.ProfileImage}`,
                            }
                          : require("@/assets/images/21666259.jpg")
                      }
                      style={styles.comment_profile}
                    />
                    <View style={styles.comment_con}>
                      <Text style={{ fontWeight: "bold", color: theme.text }}>
                        {e.User.Name}
                      </Text>
                      <Text style={{ color: theme.text }}>{e.Comment}</Text>
                      <Text style={styles.comment_txt}>
                        {timeFormat(e.createAt)}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          )}
          <TextInput
            placeholder="Message"
            value={commentTxt}
            onChangeText={(e) => {
              setCommentTxt(e);
            }}
            right={
              <TextInput.Icon
                onPress={async () => {
                  try {
                    const sid = await AsyncStorage.getItem("SId");
                    let a = Number(sid);
                    const id = await AsyncStorage.getItem("Id");
                    let b = Number(id);
                    const aid = await AsyncStorage.getItem("AId");
                    let c = Number(aid);
                    const resp = await axios.post(
                      `${commanApi}/comment/create`,
                      {
                        Comment: commentTxt,
                        SenderId: b,
                        StoryId: a,
                      }
                    );

                    if (resp.data.success) {
                      await axios.post(`${commanApi}/notification/create`, {
                        SenderId: b,
                        RecieverId: c,
                        StoryId: a,
                        CommentId: Number(resp.data.data.Id),
                        NotificationType: "COMMENT",
                      });
                      loadData();
                      ToastAndroid.show("Comment successfully posted!", 2000);
                    } else {
                      ToastAndroid.show(
                        "Failed to post comment. Please try again.",
                        2000
                      );
                    }

                    setCommentTxt("");
                  } catch (e) {
                    console.log(e);
                    Alert.alert(
                      "Something went wrong!",
                      "It seems we're having trouble connecting. Please try again later."
                    );
                  }
                }}
                icon={() => <Icon name="send" size={width * 0.06} />}
              />
            }
          />
        </View>
      </View>
    </View>
  );
};

export default ReadScreen;
