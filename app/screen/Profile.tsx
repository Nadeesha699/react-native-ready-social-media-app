import {
  ActivityIndicators,
  commanApi,
  NoDataPostView,
} from "@/app/components/components";
import React, { useContext, useEffect, useState } from "react";
import { Dimensions, ImageBackground, Linking, ScrollView } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

import { NavigationProp } from "@react-navigation/native";
import { styles } from "@/css/main";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import axios from "axios";
import storyJson from "../Json/storyJson.json";
import userJson from "../Json/userJson.json";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const Profile: React.FC<TestScreenProps> = ({ navigation }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const [profileData, setProfilData] = useState(userJson);
  const [storyData, setStoryData] = useState(storyJson);
  const [storyCount, setStoryCount] = useState(0);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [noDataFound, setNoDataFound] = useState(false);
  const shareText = "Check out this awesome app!";
  const shareUrl = "https://example.com";
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const id = await AsyncStorage.getItem("Id");
    const resp1 = await axios.get(
      `${commanApi}/story/get-all/by-user-id/${id}`
    );
    const resp2 = await axios.get(
      `${commanApi}/follower/following-count/${id}`
    );
    const resp3 = await axios.get(`${commanApi}/follower/follower-count/${id}`);
    const resp = await axios.get(`${commanApi}/user/get-All/${id}`);
    resp1.data.data.length !== 0
      ? setStoryData(resp1.data.data)
      : setNoDataFound(true);
    setStoryCount(storyData.length);
    setFollowingCount(resp2.data.data);
    setFollowerCount(resp3.data.data);
    if (resp.data.data[0].length !== 0) {
      setProfilData((prev) => ({
        ...prev,
        Name: resp.data.data[0].Name,
        Email: resp.data.data[0].Email,
        PhoneNumber: resp.data.data[0].PhoneNumber,
        Bio: resp.data.data[0].Bio,
        ProfileImage: resp.data.data[0].ProfileImage,
        CoverImage: resp.data.data[0].CoverImage,
      }));
    }

    console.log(
      resp1.data.data + resp.data.data[0] + resp2.data.data + resp3.data.data
    );

    setWaiting(false);
  };

  return (
    <>
      {waiting ? (
        <ActivityIndicators />
      ) : (
        <View
          style={[
            styles.profile_container,
            { backgroundColor: theme.background },
          ]}
        >
          <View style={styles.profile_hearder}>
            <ImageBackground
              style={styles.profile_hearder_1}
              source={
                profileData.CoverImage
                  ? {
                      uri: `data:image/jpeg;base64,${profileData.CoverImage}`,
                    }
                  : require("@/assets/images/nophoto.png")
              }
            ></ImageBackground>
            <View style={styles.profile_hearder_2}>
              <View style={styles.profile_hearder_2_2}>
                <ImageBackground
                  source={
                    profileData.ProfileImage
                      ? {
                          uri: `data:image/jpeg;base64,${profileData.ProfileImage}`,
                        }
                      : require("@/assets/images/21666259.jpg")
                  }
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
                <TouchableOpacity
                  style={styles.profile_message_button}
                  onPress={() => {
                    const intentUrl = `https://wa.me/?text=${encodeURIComponent(
                      shareText + " " + shareUrl
                    )}`;
                    Linking.openURL(intentUrl).catch((err) =>
                      console.error("Error opening URL:", err)
                    );
                  }}
                >
                  <Text style={styles.profile_message_button_text}>Share</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {noDataFound ? (
            <NoDataPostView />
          ) : (
            <ScrollView
              horizontal={true}
              style={{
                flex: 0.5,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              {storyData.map((e, Index) => {
                return (
                  <TouchableOpacity
                    style={[styles.profile_story_card]}
                    key={Index}
                    onPress={async () => {
                      try {
                        await AsyncStorage.setItem("SId", e.Id.toString());
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
            </ScrollView>
          )}
        </View>
      )}
    </>
  );
};

export default Profile;
