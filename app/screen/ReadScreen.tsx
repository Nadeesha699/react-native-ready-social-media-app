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
  StyleSheet,
  Dimensions,
  ScrollView,
  TextComponent,
} from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");

const commentData = [
  {
    profile: "@/assets/images/40523.jpg",
    comment: "Eka Patta",
    name: "Kusal Ahela Arachchi",
    time: "5h",
  },
  {
    profile: "@/assets/images/40523.jpg",
    comment: "Eka Patta",
    name: "Kusal Ahela Arachchi",
    time: "5h",
  },
  {
    profile: "@/assets/images/40523.jpg",
    comment: "Eka Patta",
    name: "Kusal Ahela Arachchi",
    time: "5h",
  },
  {
    profile: "@/assets/images/40523.jpg",
    comment: "Eka Patta",
    name: "Kusal Ahela Arachchi",
    time: "5h",
  },
  {
    profile: "@/assets/images/40523.jpg",
    comment:
      "Eka Pattaedhgd gedyg uugfeufgue fuufufueu feu feufue hfuhfuhu urhfu rufhru hgur ugr gurfughu",
    name: "Kusal Ahela Arachchi",
    time: "5h",
  },
  {
    profile: "@/assets/images/40523.jpg",
    comment: "Eka Patta",
    name: "Kusal Ahela Arachchi",
    time: "5h",
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
    };

    loadData();
  }, []);

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
          // source={
          //   storyImg
          //     ? storyImg
          //     : require("@/assets/images/3d-fantasy-scene.jpg")
          // }
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
                      source={require("@/assets/images/40523.jpg")}
                      style={styles.comment_profile}
                    />
                    <View style={styles.comment_con}>
                      <Text style={{ fontWeight: "bold", color: theme.text }}>
                        {e.name}
                      </Text>
                      <Text style={{ color: theme.text }}>{e.comment}</Text>
                      <Text style={styles.comment_txt}>{e.time}</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
            <TextInput
              style={{ backgroundColor: theme.background, color: theme.text }}
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
        </View>
      </View>
    </>
  );
};

export default ReadScreen;
