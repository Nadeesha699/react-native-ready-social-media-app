import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useRef } from "react";
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
    comment: "Eka Pattaedhgd gedyg uugfeufgue fuufufueu feu feufue",
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

function ReadScreen() {
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
            <TouchableOpacity onPress={() => {
                  closeComment ? setCloseComment(false) : setCloseComment(true);
                }}>
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
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            top: closeComment? 0 : 1000,
          }}
        >
          <View style={{ flex: 0.5, backgroundColor: "#0000008c" }}></View>
          <View
            style={{
              flex: 0.5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: "5%",
                backgroundColor:"white"
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  closeComment ? setCloseComment(false) : setCloseComment(true);
                }}
              >
                <Image
                  source={require("@/assets/images/close.png")}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              style={{ padding: "5%",backgroundColor:"white" }}
              showsHorizontalScrollIndicator={false}
              ref={scrollViewRef}
            >
              {commentData.map((e, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      marginBottom: 10,
                      // borderBottomWidth: 1,
                      padding: 10,
                      gap:10,
                    }}
                  >
                    <Image
                      source={require("@/assets/images/40523.jpg")}
                      style={{ width: 70, height: 70, borderRadius: 50 }}
                    />
                    <View style={{ justifyContent: "space-evenly" ,width:"100%"}}>
                      <Text style={{fontWeight:"bold"}}>{e.name}</Text>
                      <Text style={{fontWeight:"bold",fontSize:17}}>{e.comment}</Text>
                      <Text style={{fontSize:12,color:"#848484"}}>{e.time}</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
            <TextInput
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
  readscreen_body: { flex: 0.7, padding: "5%" },
  readscreen_img2: { width: width * 0.05, height: width * 0.05 },
  readscreen_txt1: {
    letterSpacing: width * 0.004,
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
    fontSize: width * 0.035,
    letterSpacing: width * 0.004,
    color: "#fe165c",
  },
  profile_back_button: {
    width: width * 0.05,
    height: width * 0.05,
    margin: width * 0.05,
  },
  readscreen_con6: {
    display: "flex",
    flexDirection: "row",
    gap: width * 0.05,
    margin: width * 0.05,
    justifyContent: "space-between",
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
    backgroundColor: "#ff1158",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width * 0.09,
    width: width * 0.25,
  },
});

export default ReadScreen;
