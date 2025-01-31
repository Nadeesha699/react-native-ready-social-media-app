import { loadAuthor, StatusBars } from "@/app/components/components";

import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { all } from "@/data/dumiData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

import { DrawerActions, NavigationProp } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ThemeContext } from "../Theme/ThemeContext";
import { lightTheme, darkTheme } from "../Theme/theme";
import { styles } from "@/css/main";
import axios from "axios";

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

  const [storyData, setStoryData] = useState([
    {
      Id: 0,
      Tittle: null,
      Story: null,
      LikeCount: 0,
      Category: "All",
      AuthorId: 0,
      Image: null,
      User: {
        Id: 0,
        Name: "",
        Email: "",
        PhoneNumber: "",
        Bio: "t",
        createAt: "",
        updateAt: "",
      },
    },
  ]);

const [userData, setuserData] = useState({
      Name: "",
      Email: "",
      Password: "",
      PhoneNumber: "",
    });

  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    
    const loadData = async () => {
      try{
      const resp = await axios.get("http://192.168.1.82:4000/api/story/get-all");
      const resp1 = await axios.get('http://192.168.1.82:4000/api/user/get-All/7')
      setuserData(resp1.data.data)
      resp.data.data ? setWaiting(false) : setWaiting(true);
      setStoryData(resp.data.data);
    }catch(e){
      setWaiting(true)
    }
    };
    loadData();
  
  }, []);

  const commentCount = async (count:any)=>{
    try {
      const resp = await axios.get(`http://localhost:4000/api/comment/all/by-id/1`);
      return resp.data.length; // Assuming resp.data is an array of comments
    } catch (error) {
      console.error("Error fetching comments:", error);
      return 0;
    }
  }

  return (
    <>
      <StatusBars />
      {waiting ? (
        <ActivityIndicator
          color="blue"
          size="large"
          style={{ flex: 1 }}
        ></ActivityIndicator>
      ) : (
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
              {userData.Name}
            </Text>
            <View style={styles.home_scroll_sub_view}>
              {storyData.map((e, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={async () => {
                      try {
                        await setLocalData(
                          e.AuthorId,
                          e.User.Name,
                          e.Tittle,
                          e.Story,
                          e.Image
                        );
                        navigation.navigate("Story");
                      } catch (error) {
                        console.error("Error saving to AsyncStorage:", error);
                      }
                    }}
                  >
                    <ImageBackground
                      source={{ uri: `data:image/jpeg;base64,${e.Image}` }}
                      style={styles.home_img2}
                    >
                      <Text
                        style={styles.home_txt_3}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {e.Tittle}
                      </Text>
                      <Text
                        style={styles.home_txt_4}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {e.User.Name}
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
              {storyData.map((e, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.home_category_button,
                      {
                        backgroundColor:
                          e.Category === clickButtonColor ? "#1178ff" : "red",
                      },
                    ]}
                    onPress={() => {
                      setClickButtonColor(e.Category);
                      // setType(e.type);
                    }}
                  >
                    <Text style={styles.home_txt_6}>{e.Category}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View style={styles.home_body}>
            {storyData
              .filter((e) =>
                clickButtonColor.toLowerCase() !== "all"
                  ? e.Category.toLowerCase().includes(
                      clickButtonColor.toLowerCase()
                    )
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
                          e.AuthorId,
                          e.User.Name,
                          e.Tittle,
                          e.Story,
                          e.Image
                        );
                        navigation.navigate("Story");
                      } catch (error) {
                        console.error("Error saving to AsyncStorage:", error);
                      }
                    }}
                  >
                    <ImageBackground
                      source={{ uri: `data:image/jpeg;base64,${e.Image}` }}
                      style={styles.home_img3}
                    ></ImageBackground>
                    <View style={styles.home_con10}>
                      <Text
                        style={[styles.home_txt_7, { color: theme.text }]}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {e.Tittle}
                      </Text>
                      <Text
                        style={styles.home_txt_8}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {e.User.Name}
                      </Text>
                      <View style={styles.home_con8}>
                        <View style={styles.home_con9}>
                          <Icon
                            name={"thumb-up-outline"}
                            size={width * 0.04}
                            color={theme.text}
                          />
                          <Text style={{ color: theme.text }}>
                            {e.LikeCount}
                          </Text>
                        </View>
                        <View style={styles.home_con9}>
                          <Icon
                            name={"comment-outline"}
                            size={width * 0.04}
                            color={theme.text}
                          />
                          <Text style={{ color: theme.text }}>{
                            0
                            }</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </View>
        </View>
      )}
    </>
  );
};

export default Home;
