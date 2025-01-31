import { StatusBars } from "@/app/components/components";
import { navigate } from "expo-router/build/global-state/routing";
import React, { useContext, useEffect, useState } from "react";
import { Dimensions, ImageBackground, ScrollView } from "react-native";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

const uploadaData = [
  { name: "Story Name" },
  { name: "Story Name" },
  { name: "Story Name" },
  { name: "Story Name" },
  { name: "Story Name" },
  { name: "Story Name" },
  { name: "Story Name" },
  { name: "Story Name" },
  { name: "Story Name" },
  { name: "Story Name" },
  { name: "Story Name" },
  { name: "Story Name" },
  { name: "Story Name" },
  { name: "Story Name" },
  { name: "Story Name" },
];

import { NavigationProp } from "@react-navigation/native";
import { styles } from "@/css/main";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import axios from "axios";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const Profile: React.FC<TestScreenProps> = ({ navigation }) => {
  
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const [profileData, setProfilData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    ProfileImage: null,
    CoverImage: null,
    Bio: null,
  });
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
  const  [storyCount,setStoryCount] = useState(0)
  const [followerCount,setFollowerCount] = useState(0)
  const [followingCount,setFollowingCount] = useState(0)

  useEffect(() => {
    const loadData = async () => {
      const id = await AsyncStorage.getItem("Id");
      const resp1 = await axios.get("http://192.168.1.82:4000/api/story/get-all");
      setStoryData(resp1.data.data);
      setStoryCount(storyData.length)

      const resp2 = await axios.get(`http://192.168.1.82:4000/api/following/get-all/by-id/${id}`)
      setFollowingCount(resp2.data.data.length)

      const resp3 = await axios.get(`http://192.168.1.82:4000/api/follower/get-all/by-id/${id}`)
      setFollowerCount(resp3.data.data.length)
      
      const resp = await axios.get(
        `http://localhost:4000/api/user/get-All/${id}`
      );
      if (resp.data.success) {
        setProfilData((prev) => ({
          ...prev,
          Name: resp.data.data.Name,
          Email: resp.data.data.Email,
          PhoneNumber: resp.data.data.PhoneNumber,
          Bio: resp.data.data.Bio,
        }));
      }
    };
    loadData();
  });

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
  return (
    <>
      <StatusBars />
      <View
        style={[
          styles.profile_container,
          { backgroundColor: theme.background },
        ]}
      >
        <View style={styles.profile_hearder}>
          <ImageBackground
            style={styles.profile_hearder_1}
            source={{
              uri: `data:image/jpeg;base64,${profileData.CoverImage}`,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <ImageBackground
                source={require("@/assets/images/arrow1.png")}
                style={styles.profile_back_button}
              />
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.profile_hearder_2}>
            <View style={styles.profile_hearder_2_2}>
              <ImageBackground
                source={{
                  uri: `data:image/jpeg;base64,${profileData.ProfileImage}`,
                }}
                style={styles.profile_image}
              />
              <Text style={[styles.profile_txt_1, { color: theme.text }]}>
                {profileData.Name}
              </Text>
              <Text style={[styles.profile_txt_2, { color: theme.text }]}>
                {profileData.Bio}
              </Text>
            </View>
            <View style={styles.profile_hearder_2_1}>
              <View style={styles.profile_hearder_2_1_1}>
                <Text style={[styles.profile_txt_1, { color: theme.text }]}>
                  {storyCount}
                </Text>
                <Text style={[styles.profile_txt_2, { color: theme.text }]}>
                  Story
                </Text>
              </View>
              <View style={styles.profile_hearder_2_1_1}>
                <Text style={[styles.profile_txt_1, { color: theme.text }]}>
                  {followerCount}
                </Text>
                <Text style={[styles.profile_txt_2, { color: theme.text }]}>
                  Followers
                </Text>
              </View>
              <View style={styles.profile_hearder_2_1_1}>
                <Text style={[styles.profile_txt_1, { color: theme.text }]}>
                  {followingCount}
                </Text>
                <Text style={[styles.profile_txt_2, { color: theme.text }]}>
                  Follwing
                </Text>
              </View>
            </View>
            <View style={styles.profile_hearder_2_1}>
              <TouchableOpacity
                style={styles.profile_edit_button}
                onPress={() => {
                  navigation.navigate("Update Profile");
                }}
              >
                <Text style={styles.profile_edit_button_text}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.profile_message_button}>
                <Text style={styles.profile_message_button_text}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.profile_body}>
          {storyData.map((e, Index) => {
            return (
              <TouchableOpacity
                style={styles.profile_story_card}
                key={Index}
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
                  style={styles.profile_story_card_background}
                >
                  <Text
                    style={styles.profile_txt_3}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {e.Tittle}
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </>
  );
};

export default Profile;
