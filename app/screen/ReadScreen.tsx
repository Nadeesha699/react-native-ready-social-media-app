import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useContext, useId, useRef } from "react";
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
} from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");

import { NavigationProp } from "@react-navigation/native";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import { styles } from "@/css/main";
import axios from "axios";
import { commanApi } from "../components/components";
import commentJson from "../Json/commentJson.json";
import followJson from "../Json/followJson.json";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const ReadScreen: React.FC<TestScreenProps> = ({ navigation }) => {
// const ReadScreen = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [followed, setFollowed] = useState(false);
  const [likeRed, setLikeRed] = useState(false);
  const [closeComment, setCloseComment] = useState(false);
  const [authorName, setAuthorName] = useState<string | null>(null);
  const [storyName, setStoryName] = useState<string | null>(null);
  const [story, setStory] = useState<string | null>(null);
  const [storyImg, setStoryImg] = useState<string | null>(null);
  const scrollViewRef = useRef<ScrollView | null>(null);

  const [commentData, setCommentData] = useState(commentJson);

  const [followData, setFollowData] = useState(followJson);

  const [newFollow, setNewFollow] = useState(false);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
    const loadData = async () => {
      setAuthorName(await AsyncStorage.getItem("author_name"));
      setStoryName(await AsyncStorage.getItem("story_name"));
      const storedImg = await AsyncStorage.getItem("story_img");
      const storyImg = storedImg ? JSON.parse(storedImg) : null;
      setStoryImg(storyImg);
      setStory(await AsyncStorage.getItem("story"));

      const resp = await axios.get(`${commanApi}/comment/all/by-id/1`);
      setCommentData(resp.data.data);

      const resp1 = await axios.get(
        `${commanApi}/follower/verify-follower/12/7`
      );
      resp1.data.success
        ? setFollowData(resp1.data.data[0])
        : setNewFollow(true);
      const resp2 = await axios.get(`${commanApi}/like/verify/1/7`);
      resp2.data.success ? setLikeRed(true) : setLikeRed(false);
    };

    loadData();
  }, []);

  const timeFormat = (time: any) => {
    const date = new Date(time);
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = date.getHours() >= 12 ? "PM" : "AM";
    return `${hours}:${minutes} ${ampm}`;
  };

  const [commentTxt, setCommentTxt] = useState("");

  return (
    <>
      <StatusBar />
      <View
        style={[
          styles.readscreen_container,
          { backgroundColor: theme.background },
        ]}
      >
        <ImageBackground
          style={styles.readscreen_header}
          source={{ uri: `data:image/jpeg;base64,${storyImg}` }}
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
                // setLikeRed(!likeRed);
                if (likeRed) {
                  const resp = await axios.post(`${commanApi}/like/add`, {
                    SenderId: 7,
                    StoryId: 1,
                  });
                  resp.data.success ? setLikeRed(true) : setLikeRed(false);
                } else {
                  const resp = await axios.post(
                    `${commanApi}/like/remove/1/7`,
                    {
                      SenderId: 7,
                      StoryId: 1,
                    }
                  );
                  resp.data.success ? setLikeRed(false) : setLikeRed(true);
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
                {storyName}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("User Profile");
                }}
              >
                <Text style={styles.readscreen_txt4}>{authorName}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={[
                styles.readscreen_follow_button,
                {
                  backgroundColor: newFollow
                    ? "red"
                    : followData.FriendStatus
                    ? "yellow"
                    : "pink",
                  // backgroundColor: "#1178ff",
                  borderWidth: 0,
                },
              ]}
              onPress={async () => {
                if (newFollow) {
                  const resp = await axios.post(
                    `${commanApi}/follower/follow`,
                    {
                      FollowerId: 12,
                      UserId: 7,
                      FriendStatus: false,
                    }
                  );
                  resp.data.success ? console.log("followed") : "";
                } else {
                  if (followData.FriendStatus) {
                    const resp = await axios.put(
                      `${commanApi}/follower/follow-back-or-unfollow/3`,
                      {
                        FriendStatus: false,
                      }
                    );
                    resp.data.success ? console.log("unfollowed") : "";
                  } else {
                    const resp = await axios.put(
                      `${commanApi}/follower/follow-back-or-unfollow/3`,
                      {
                        FriendStatus: true,
                      }
                    );
                    resp.data.success ? console.log("friend") : "";
                  }
                }
              }}
            >
              <Text style={[styles.readscreen_txt1, { color: "white" }]}>
                {newFollow
                  ? "Follow"
                  : followData.FriendStatus
                  ? "friend"
                  : "follow back"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.readscreen_con9, {}]}>
            <Text style={styles.readscreen_txt3}>{story}</Text>
          </View>
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
                      source={{
                        uri: `data:image/jpeg;base64,${e.User.ProfileImage}`,
                      }}
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
            <TextInput
              style={{ backgroundColor: theme.background, color: theme.text }}
              placeholder="Message"
              value={commentTxt}
              onChangeText={(e) => {
                setCommentTxt(e);
              }}
              right={
                <TextInput.Icon
                  onPress={async () => {
                    const resp = await axios.post(
                      `${commanApi}/comment/create`,
                      {
                        Comment: commentTxt,
                        SenderId: 7,
                        StoryId: 1,
                      }
                    );

                    resp.data.success === true
                      ? console.log("send")
                      : console.log("unsend");

                    setCommentTxt("");
                  }}
                  icon={() => (
                    <Icon name="send" size={width * 0.06} color={theme.text} />
                  )}
                />
              }
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default ReadScreen;
