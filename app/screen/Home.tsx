import { StatusBars } from "@/components/components";

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { all, horror, fantasy, thriller } from "@/data/dumiData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

import { DrawerActions, NavigationProp } from "@react-navigation/native";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const { width, height } = Dimensions.get("window");

const Home: React.FC<TestScreenProps> = ({ navigation }) => {
  const [data, setData] = useState(all);

  const setLocalData = async (
    authorName: any,
    storyName: any,
    story: any,
    image: any
  ) => {
    await AsyncStorage.setItem("author_name", authorName);
    await AsyncStorage.setItem("story_name", storyName);
    await AsyncStorage.setItem("story", story);
    await AsyncStorage.setItem("story_img", JSON.stringify(image));
  };

  const setType = (type: any) => {
    type === "All"
      ? setData(all)
      : type === "Horror"
      ? setData(horror)
      : type === "Fantasy"
      ? setData(fantasy)
      : type === "Thriller"
      ? setData(thriller)
      : "";
  };

  return (
    <>
      <StatusBars />
      <View style={styles.home_container}>
        <View style={styles.home_header}>
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={()=>{navigation.dispatch(DrawerActions.openDrawer())}}>
              <Image
                source={require("@/assets/images/menu-button.png")}
                style={styles.home_img1}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Search");

              }}
            >
              <Image
                source={require("@/assets/images/search-analytics.png")}
                style={[styles.home_img1, { marginRight: width * 0.05 }]}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.home_txt_1}>Hello,</Text>
          <Text
            style={styles.home_txt_2}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Nadeesha Ruwandima
          </Text>
          <View style={styles.home_scroll_sub_view}>
            {all.map((e, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={async () => {
                    try {
                      await setLocalData(
                        e.author,
                        e.storyName,
                        e.story,
                        e.imgs
                      );
                      navigation.navigate("Story");
                      // router.push("/screen/ReadScreen");
                    } catch (error) {
                      console.error("Error saving to AsyncStorage:", error);
                    }
                  }}
                >
                  <ImageBackground source={e.imgs} style={styles.home_img2}>
                    <Text
                      style={styles.home_txt_3}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {e.storyName}
                    </Text>
                    <Text
                      style={styles.home_txt_4}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {e.author}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.home_category_view}>
            <TouchableOpacity
              style={styles.home_category_button}
              onPress={() => {
                setType("All");
              }}
            >
              <Text style={styles.home_txt_6}>All</Text>
            </TouchableOpacity>
            {all.map((e, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.home_category_button}
                  onPress={() => {
                    setType(e.type);
                  }}
                >
                  <Text style={styles.home_txt_6}>{e.type}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={styles.home_body}>
          {data.map((e, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.home_con6}
                onPress={async () => {
                  try {
                    await setLocalData(e.author, e.storyName, e.story, e.imgs);
                    navigation.navigate("Story");
                  } catch (error) {
                    console.error("Error saving to AsyncStorage:", error);
                  }
                }}
              >
                <ImageBackground
                  source={e.imgs}
                  style={styles.home_img3}
                ></ImageBackground>
                <View style={styles.home_con10}>
                  <Text
                    style={styles.home_txt_7}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {e.storyName}
                  </Text>
                  <Text
                    style={styles.home_txt_8}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {e.author}
                  </Text>
                  <View style={styles.home_con8}>
                    <View style={styles.home_con9}>
                      <ImageBackground
                        source={require("@/assets/images/like.png")}
                        style={styles.home_img4}
                      />
                      <Text>1k</Text>
                    </View>
                    <View style={styles.home_con9}>
                      <ImageBackground
                        source={require("@/assets/images/comment.png")}
                        style={styles.home_img4}
                      />
                      <Text>14</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  home_container: {
    flex: 1,
    gap: "2%",
    paddingTop: "5%",
    paddingLeft: "5%",
  },
  home_con10: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  home_category_view: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: "5%",
    alignItems: "center",
    overflowX: "scroll",
  },
  home_category_button: {
    backgroundColor: "#1178ff",
    width: width * 0.2,
    justifyContent: "center",
    alignItems: "center",
    padding: "3%",
    borderRadius:width * 0.02,
    overflow: "hidden",
  },
  home_img1: {
    width: width * 0.06,
    height: width * 0.06,
  },
  home_txt_6: {
    color: "white",
    fontWeight: "bold",
    // letterSpacing: width * 0.007,
  },
  home_img2: {
    width: width * 0.8,
    height: height * 0.25,
    borderRadius: width * 0.02,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "5%",
  },
  home_img3: {
    width: width * 0.2,
    height: width * 0.2,
    overflow: "hidden",
    borderRadius: width * 0.02,
  },
  home_img4: { width: width * 0.04, height: width * 0.04 },
  home_header: {
    flex: 0.5,
    justifyContent: "space-between",
    gap: width * 0.02,
  },
  home_body: {
    flex: 0.5,
    justifyContent: "flex-start",
    gap: "2%",
    width: "100%",
  },
  home_scroll_sub_view: {
    display: "flex",
    flexDirection: "row",
    gap: "5%",
    overflowX: "scroll",
  },
  home_txt_1: {
    fontSize: width * 0.1,
    color: "#8e8e8e",
    // letterSpacing: width * 0.007,
    fontWeight: "bold",
  },
  home_txt_2: {
    fontSize: width * 0.05,
    // letterSpacing: width * 0.007,
  },
  home_txt_3: {
    fontSize: width * 0.05,
    color: "white",
    // letterSpacing: width * 0.007,
    fontWeight: "bold",
  },
  home_txt_4: {
    fontSize: width * 0.035,
    color: "white",
    // letterSpacing: width * 0.007,
  },
  home_txt_7: {
    fontWeight: "bold",
    // letterSpacing: width * 0.007,
  },
  home_txt_8: {
    // letterSpacing: width * 0.007,
    color: "#8e8e8e",
  },
  home_con1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
  home_con6: {
    display: "flex",
    flexDirection: "row",
    gap: "5%",
  },
  home_con8: {
    display: "flex",
    flexDirection: "row",
    gap: "10%",
  },
  home_con9: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10%",
  },
});

export default Home;
