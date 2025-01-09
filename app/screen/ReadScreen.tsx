import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useId, useRef } from "react";
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

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const ReadScreen: React.FC<TestScreenProps> = ({ navigation }) => {
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
      <View style={styles.readscreen_container}>
        <ImageBackground
          style={styles.readscreen_header}
          source={
            storyImg
              ? storyImg
              : require("@/assets/images/3d-fantasy-scene.jpg")
          }
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="chevron-left" size={width * 0.1} color="white" />
          </TouchableOpacity>
          <View style={styles.readscreen_con6}>
            <TouchableOpacity
              onPress={() => {
                likeRed ? setLikeRed(false) : setLikeRed(true);
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
                closeComment ? setCloseComment(false) : setCloseComment(true);
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
                style={styles.readscreen_txt1}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {storyName}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("UserProfile");
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
          <View style={styles.readscreen_con9}>
            <Text style={styles.readscreen_txt3}>{story}</Text>
          </View>
          <View
            style={[
              styles.readscreen_comment_section,
              {
                top: closeComment ? 0 : width * 10,
              },
            ]}
          >
            <View style={styles.readscreen_dark_view}></View>
            <View
              style={{
                flex: 0.5,
              }}
            >
              <View style={styles.comment_header}>
                <Text style={{ fontWeight: "bold" }}>Comments</Text>
                <TouchableOpacity
                  onPress={() => {
                    closeComment
                      ? setCloseComment(false)
                      : setCloseComment(true);
                  }}
                >
                  <Icon name="close" size={width * 0.1} />
                </TouchableOpacity>
              </View>
              <ScrollView
                style={styles.comment_scroll}
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
                        <Text style={{ fontWeight: "bold" }}>{e.name}</Text>
                        <Text>{e.comment}</Text>
                        <Text style={styles.comment_txt}>{e.time}</Text>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
              <TextInput
                style={{ backgroundColor: "white" }}
                placeholder="Message"
                left={
                  <TextInput.Icon
                    icon={() => <Icon name="attachment" size={width * 0.06} />}
                  />
                }
                right={
                  <TextInput.Icon
                    icon={() => <Icon name="send" size={width * 0.06} />}
                  />
                }
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  readscreen_container: { flex: 1, backgroundColor: "white" },
  readscreen_comment_section: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
  },
  comment_con: {
    justifyContent: "space-evenly",
    width: width * 0.5,
  },
  comment_txt: { fontSize: width * 0.025, color: "#848484" },
  readscreen_dark_view: { flex: 0.5, backgroundColor: "#0000008c" },
  close_img: { width: width * 0.05, height: width * 0.05 },
  comment_scroll: { padding: width * 0.02, backgroundColor: "white" },
  comment_card: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: width * 0.02,
    padding: width * 0.02,
    gap: width * 0.02,
  },
  comment_profile: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: width * 0.5,
  },
  comment_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    padding: "5%",
    backgroundColor: "white",
  },
  readscreen_header: {
    flex: 0.3,
    width: "100%",
    height: "100%",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: width * 0.02,
  },
  readscreen_body: { flex: 0.7, padding: "5%" },
  readscreen_img2: { width: width * 0.05, height: width * 0.05 },
  readscreen_txt1: {
    fontWeight: "bold",
  },
  readscreen_txt3: {
    fontSize: width * 0.035,
    color: "#888888",
    fontWeight: "light",
    overflowY: "scroll",
    paddingTop: width * 0.07,
  },
  readscreen_txt4: {
    color: "#1178ff",
    fontWeight: "bold",
  },
  profile_back_button: {
    width: width * 0.1,
    height: width * 0.1,
  },
  readscreen_con6: {
    display: "flex",
    flexDirection: "row",
    gap: width * 0.05,
    margin: width * 0.02,
  },
  readscreen_con7: {
    justifyContent: "space-around",
    width: width * 0.6,
  },
  readscreen_con8: {
    flex: 0.09,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  readscreen_con9: {
    flex: 0.91,
  },
  readscreen_follow_button: {
    backgroundColor: "#1178ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width * 0.09,
    width: width * 0.25,
  },
});

export default ReadScreen;
