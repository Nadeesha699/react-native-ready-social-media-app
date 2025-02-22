import {
  ActivityIndicators,
  commanApi,
  NoDataPostView,
} from "@/app/components/components";
import React, { useContext, useEffect, useState } from "react";
import { ImageBackground, ScrollView } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import storyJson from "../Json/storyJson.json";
import { NavigationProp } from "@react-navigation/native";
import { styles } from "@/css/main";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import followJson from "../Json/followJson.json";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const UserProfile: React.FC<TestScreenProps> = ({ navigation }) => {
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
  const [storyData, setStoryData] = useState(storyJson);
  const [storyCount, setStoryCount] = useState(0);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [followData, setFollowData] = useState(followJson);
  const [noDataFound, setNoDataFound] = useState(false);
  const [followStatus, setFollowStatus] = useState("FOLLOW");
  const [followButtonShow, setFollowButtonShow] = useState(true);
  const [waiting, setWaiting] = useState(true);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const aid = await AsyncStorage.getItem("AId");
    const id = await AsyncStorage.getItem("Id");
    const resp1 = await axios.get(
      `${commanApi}/story/get-all/by-user-id/${aid}`
    );
    resp1.data.data.length
      ? setStoryData(resp1.data.data)
      : setNoDataFound(true);
    setStoryCount(storyData.length);

    const resp2 = await axios.get(
      `${commanApi}/follower/following-count/${aid}`
    );
    const resp3 = await axios.get(
      `${commanApi}/follower/follower-count/${aid}`
    );
    setFollowingCount(resp2.data.data);
    setFollowerCount(resp3.data.data);

    const resp = await axios.get(`${commanApi}/user/get-All/${aid}`);
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

    const resp4 = await axios.get(
      `${commanApi}/follower/verify-follower/${id}/${aid}`
    );
    if (resp4.data.data[0]) {
      setFollowData(resp4.data.data[0]);
      if (resp4.data.data[0].FriendStatus) {
        setFollowStatus("FRIEND");
      } else {
        if (resp4.data.data[0].UserId === Number(id)) {
          setFollowStatus("FOLLOWING");
        } else {
          setFollowStatus("FOLLOW BACK");
        }
      }
    } else {
      setFollowStatus("FOLLOW");
    }
    id === aid ? setFollowButtonShow(true) : setFollowButtonShow(false);
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
                {followButtonShow ? (
                  <>
                    <TouchableOpacity
                      style={styles.profile_edit_button}
                      onPress={() => {
                        navigation.navigate("Update Profile");
                      }}
                    >
                      <Text style={styles.profile_edit_button_text}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile_message_button}>
                      <Text style={styles.profile_message_button_text}>
                        Share
                      </Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <TouchableOpacity
                      style={styles.readscreen_follow_button}
                      onPress={async () => {
                        const aid = await AsyncStorage.getItem("AId");
                        let a = Number(aid);
                        const id = await AsyncStorage.getItem("Id");
                        let b = Number(id);
                        if (followStatus === "FOLLOW") {
                          await axios.post(`${commanApi}/follower/follow`, {
                            FollowerId: a,
                            UserId: b,
                            FriendStatus: false,
                          });
                        } else if (followStatus === "FOLLOWING") {
                          await axios.delete(
                            `${commanApi}/follower/unfollow/${followData.Id}`
                          );
                        } else if (followStatus === "FRIEND") {
                          await axios.put(
                            `${commanApi}/follower/follow-back/${followData.Id}`,
                            {
                              FriendStatus: false,
                            }
                          );
                        } else if (followStatus === "FOLLOW BACK") {
                          await axios.put(
                            `${commanApi}/follower/follow-back/${followData.Id}`,
                            {
                              FriendStatus: true,
                            }
                          );
                        }
                      }}
                    >
                      <Text
                        style={[styles.readscreen_txt1, { color: "white" }]}
                      >
                        {followStatus.toLocaleLowerCase()}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.profile_message_button}
                      onPress={async () => {
                        const aid = await AsyncStorage.getItem("AId");
                        let a = Number(aid);
                        const id = await AsyncStorage.getItem("Id");
                        let b = Number(id);
                        await AsyncStorage.setItem("CId", a.toString());
                        await AsyncStorage.setItem("change", "0");
                        await AsyncStorage.setItem("FId", b.toString());
                        navigation.navigate("Message");
                      }}
                    >
                      <Text style={styles.profile_message_button_text}>
                        Chat
                      </Text>
                    </TouchableOpacity>
                  </>
                )}
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
                    style={styles.profile_story_card}
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

export default UserProfile;
