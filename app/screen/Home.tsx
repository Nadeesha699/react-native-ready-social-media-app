import { StatusBars } from "@/app/components/components";

import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { all } from "@/data/dumiData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

import { DrawerActions, NavigationProp } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ThemeContext } from "../Theme/ThemeContext";
import { lightTheme, darkTheme } from "../Theme/theme";
import { styles } from "@/css/main";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const { width, height } = Dimensions.get("window");

const Home: React.FC<TestScreenProps> = ({ navigation }) => {
  const [data, setData] = useState(all);
  const [clickButtonColor, setClickButtonColor] = useState("all");

  const setLocalData = async (
    authorId: any,
    authorName: any,
    storyName: any,
    story: any,
    image: any
  ) => {
    await AsyncStorage.setItem("author_id", authorId);
    await AsyncStorage.setItem("author_name", authorName);
    await AsyncStorage.setItem("story_name", storyName);
    await AsyncStorage.setItem("story", story);
    await AsyncStorage.setItem("story_img", JSON.stringify(image));
  };

  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <>
      <StatusBars />
      <View
        style={[styles.home_container, { backgroundColor: theme.background }]}
      >
        <View style={styles.home_header}>
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer());
              }}
            >
              <Icon name={"menu"} size={width * 0.06} color={theme.text} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Search");
              }}
            >
              <Icon
                name={"magnify"}
                size={width * 0.06}
                color={"#1178ff"}
                style={{ marginRight: width * 0.03 }}
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
                        e.author_id,
                        e.author,
                        e.storyName,
                        e.story,
                        e.imgs
                      );
                      navigation.navigate("Story");
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
              style={[
                styles.home_category_button,
                {
                  backgroundColor:
                    "all".toLowerCase() === clickButtonColor
                      ? "#1178ff"
                      : "red",
                },
              ]}
              onPress={() => {
                setClickButtonColor("all");
                // setType("All");
              }}
            >
              <Text style={styles.home_txt_6}>All</Text>
            </TouchableOpacity>
            {all.map((e, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.home_category_button,
                    {
                      backgroundColor:
                        e.type === clickButtonColor ? "#1178ff" : "red",
                    },
                  ]}
                  onPress={() => {
                    setClickButtonColor(e.type);
                    // setType(e.type);
                  }}
                >
                  <Text style={styles.home_txt_6}>{e.type}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={styles.home_body}>
          {data
            .filter((e) =>
              clickButtonColor.toLowerCase() !== "all"
                ? e.type.toLowerCase().includes(clickButtonColor.toLowerCase())
                : true
            )
            .map((e, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.home_con6}
                  onPress={async () => {
                    try {
                      await setLocalData(
                        e.author_id,
                        e.author,
                        e.storyName,
                        e.story,
                        e.imgs
                      );
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
                      style={[styles.home_txt_7, { color: theme.text }]}
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
                        <Icon
                          name={"thumb-up-outline"}
                          size={width * 0.04}
                          color={theme.text}
                        />
                        <Text style={{ color: theme.text }}>1k</Text>
                      </View>
                      <View style={styles.home_con9}>
                        <Icon
                          name={"comment-outline"}
                          size={width * 0.04}
                          color={theme.text}
                        />
                        <Text style={{ color: theme.text }}>14</Text>
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

export default Home;
