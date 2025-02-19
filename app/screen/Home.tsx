import {
  ActivityIndicators,
  commanApi,
  loadAuthor,
  StatusBars,
} from "@/app/components/components";

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
  ToastAndroid,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { DrawerActions, NavigationProp } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ThemeContext } from "../Theme/ThemeContext";
import { lightTheme, darkTheme } from "../Theme/theme";
import { styles } from "@/css/main";
import axios from "axios";
import storyJson from "../Json/storyJson.json";
import { ScrollView } from "react-native-gesture-handler";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const { width, height } = Dimensions.get("window");

const Home: React.FC<TestScreenProps> = ({ navigation }) => {
  const [clickButtonColor, setClickButtonColor] = useState("all");


  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [storyData, setStoryData] = useState(storyJson);

  const [userData, setuserData] = useState({
    Name: "",
    Email: "",
    Password: "",
    PhoneNumber: "",
  });

  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const id = await AsyncStorage.getItem("Id");
        let ids = Number(id);
        const resp = await axios.get(`${commanApi}/story/get-all`);
        const resp1 = await axios.get(`${commanApi}/user/get-All/${ids}`);
        setuserData(resp1.data.data[0]);
        resp.data.data[0] ? setWaiting(false) : setWaiting(true);
        setStoryData(resp.data.data);
        ToastAndroid.show("Hello " + userData.Name, 2000);
      } catch (e) {
        setWaiting(true);
      }
    };
    loadData();
  }, []);

  return (
    <>
      <StatusBars />
      {/* {waiting ? (
        <ActivityIndicators />
      ) : ( */}
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
            <ScrollView
              horizontal={true}
              contentContainerStyle={{
                flexGrow: 1,
                gap: "5%",
              }}
            >
              {storyData.map((e, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={async () => {
                      try {
                        await AsyncStorage.setItem("SId", e.Id.toString());
                        await AsyncStorage.setItem(
                          "AId",
                          e.AuthorId.toString()
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
            </ScrollView>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{
                flexGrow: 1,
                gap: "5%",
              }}
            >
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
                    }}
                  >
                    <Text style={styles.home_txt_6}>{e.Category}</Text>
                  </TouchableOpacity>
                );
              })}
              </ScrollView>
          </View>
          <View style={styles.home_body}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              gap: "2%",
            }}
          >
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
                        await AsyncStorage.setItem("SId", e.Id.toString());
                        await AsyncStorage.setItem(
                          "AId",
                          e.AuthorId.toString()
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
                    />
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
                          <Text style={{ color: theme.text }}>
                            {e.CommentCount}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
          </View>
        </View>
      {/* )} */}
    </>
  );
};

export default Home;

