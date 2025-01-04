import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
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
} from "react-native";

const { width, height } = Dimensions.get("window");

function ReadScreen() {
  const [followed, setFollowed] = useState(false);
  const [likeRed, setLikeRed] = useState(false);
  const [authorName, setAuthorName] = useState<string | null>(null);
  const [storyName, setStoryName] = useState<string | null>(null);
  const [story, setStory] = useState<string | null>(null);
  const [storyImg, setStoryImg] = useState<string | null>(null);

  useEffect(() => {
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
          <TouchableOpacity>
            <ImageBackground
              source={require("@/assets/images/left-arrow.png")}
              style={styles.profile_back_button}
            />
          </TouchableOpacity>
          <View style={styles.readscreen_con6}>
            <TouchableOpacity
              onPress={() => {
                likeRed ? setLikeRed(false) : setLikeRed(true);
              }}
            >
              <ImageBackground
                source={
                  likeRed
                    ? require("@/assets/images/like2.png")
                    : require("@/assets/images/like1.png")
                }
                style={styles.readscreen_img2}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("@/assets/images/comment1.png")}
                style={styles.readscreen_img2}
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
              <Text style={styles.readscreen_txt4}>{authorName}</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.readscreen_follow_button,
                {
                  backgroundColor: followed ? "white" : "#ff1158",
                  borderWidth: followed ? 2 : 0,
                },
              ]}
              onPress={() => {
                followed ? setFollowed(false) : setFollowed(true);
              }}
            >
              <Text
                style={[
                  styles.readscreen_txt2,
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
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  readscreen_container: { flex: 1 },
  readscreen_header: {
    flex: 0.3,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  readscreen_body: { flex: 0.7,padding: "5%" },
  readscreen_con1: {
    width: "100%",
    height: 350,
    display: "flex",
    justifyContent: "flex-start",
  },
  readscreen_img1: { width: "100%", height: 250 },
  readscreen_con2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  readscreen_con4: { display: "flex", flexDirection: "row", gap: 10 },
  readscreen_con3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 100,
    paddingLeft: 10,
    paddingRight: 10,
  },
  readscreen_con5: {
    backgroundColor: "white",
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    padding: 5,
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  readscreen_img2: { width: 20, height: 20 },
  readscreen_txt1: {
    letterSpacing: 2,
    fontWeight: "bold",
  },
  readscreen_txt2: {
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  readscreen_txt3: {
    fontSize: 17,
    color: "#888888",
    overflowY: "scroll",
    paddingTop: "10%",
  },
  readscreen_txt4: {
    textAlign: "left",
    fontSize: 15,
    letterSpacing: 2,
    color: "#fe165c",
    fontWeight: "bold",
  },
  readscreen_btn1: {
    width: "30%",
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderColor: "black",
  },
  profile_back_button: {
    width: 20,
    height: 20,
    margin: 20,
  },
  readscreen_con6: {
    display: "flex",
    flexDirection: "row",
    gap: "20%",
    margin: 20,
    justifyContent: "space-between",
  },
  readscreen_con7: {
    justifyContent: "space-around",
    width: "70%",
  },
  readscreen_con8: {
    flex: 0.09,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  readscreen_con9: {
    flex: 0.91
  },
  readscreen_follow_button: {
    backgroundColor: "#ff1158",
    padding: "2%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    width: "30%",
  },
});

export default ReadScreen;
