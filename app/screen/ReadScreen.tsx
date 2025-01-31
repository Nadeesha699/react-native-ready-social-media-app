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

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const ReadScreen: React.FC<TestScreenProps> = ({ navigation }) => {
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

  const [commentData, setCommentData] = useState([
    {
      Id: 0,
      Comment: "",
      SenderId: 0,
      StoryId: 0,
      createAt: "",
      updateAt: "",
      User: {
        Id: 0,
        Name: "",
        Email: "",
        PhoneNumber: "",
        ProfileImage: null,
        CoverImage: null,
        Bio: "",
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
      setAuthorName(await AsyncStorage.getItem("author_name"));
      setStoryName(await AsyncStorage.getItem("story_name"));
      const storedImg = await AsyncStorage.getItem("story_img");
      const storyImg = storedImg ? JSON.parse(storedImg) : null;
      setStoryImg(storyImg);
      setStory(await AsyncStorage.getItem("story"));

      const resp = await axios.get(
        "http://localhost:4000/api/comment/all/by-id/1"
      );
      setCommentData(resp.data.data);
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
                setLikeRed(!likeRed);
                likeRed
                  ? await axios.get(
                      "http://192.168.1.82:4000/api/story/like/by-story-id/1?oppesite="
                    )
                  : await axios.get(
                      "http://192.168.1.82:4000/api/story/like/by-story-id/1?oppesite=uyuyuy"
                    );
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
                  backgroundColor: followed ? "white" : "#1178ff",
                  borderWidth: followed ? 2 : 0,
                },
              ]}
              onPress={() => {
                followed ? setFollowed(false) : setFollowed(true);
              }}
            >
              <Text
                style={[
                  styles.readscreen_txt1,
                  { color: followed ? "" : "white" },
                ]}
              >
                {followed ? "Following" : "Follow"}
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
                    "http://localhost:4000/api/comment/create",
                    {
                      Comment: commentTxt,
                      SenderId: 7,
                      StoryId: 1,
                    }
                  );
  
                  resp.data.success === true
                    ? console.log("send")
                    : console.log("unsend");
  
                  setCommentTxt("")  
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
