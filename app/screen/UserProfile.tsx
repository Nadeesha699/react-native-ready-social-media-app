import { commanApi, StatusBars } from "@/app/components/components";
import { navigate } from "expo-router/build/global-state/routing";
import React, { useEffect, useState } from "react";
import { Dimensions, ImageBackground, ScrollView } from "react-native";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import storyJson from '../Json/storyJson.json'
const { width, height } = Dimensions.get("window");


import { NavigationProp } from "@react-navigation/native";
import { styles } from "@/css/main";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import followJson from '../Json/followJson.json'

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

// const UserProfile: React.FC<TestScreenProps> = ({ navigation }) => {
  const UserProfile = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [authorId, setAuthorId] = useState<string | null>(null);

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

  const [newFollow, setNewFollow] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      // let userIds = await AsyncStorage.getItem("userId");
      // let authorIds = await AsyncStorage.getItem("author_id");
      // setUserId(userIds);
      // setAuthorId(authorIds);
      const id = await AsyncStorage.getItem("Id");
      const resp1 = await axios.get(
        `${commanApi}/story/get-all`
      );
      setStoryData(resp1.data.data);
      setStoryCount(storyData.length);

      const resp2 = await axios.get(`${commanApi}/follower/following-count/7`);
      const resp3 = await axios.get(`${commanApi}/follower/follower-count/7`);
      setFollowingCount(resp2.data.data);
      setFollowerCount(resp3.data.data);

      const resp = await axios.get(
        `${commanApi}/user/get-All/${id}`
      );
      if (resp.data.success) {
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
        `${commanApi}/follower/verify-follower/12/7`
      );
      if (resp1.data.success) {
        setFollowData(resp4.data.data[0]);
      } else {
        setNewFollow(true);
      }
    };
    loadData();
  }, []);

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
      <View style={styles.profile_container}>
        <View style={styles.profile_hearder}>
          <ImageBackground
            style={styles.profile_hearder_1}
            source={{
              uri: `data:image/jpeg;base64,${profileData.CoverImage}`,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                // navigation.goBack();
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
              <Text style={styles.profile_txt_1}>{profileData.Name}</Text>
              <Text style={styles.profile_txt_2}>{profileData.Bio}</Text>
            </View>
            <View style={styles.profile_hearder_2_1}>
              <View style={styles.profile_hearder_2_1_1}>
                <Text style={styles.profile_txt_1}>{storyCount}</Text>
                <Text style={styles.profile_txt_2}>Story</Text>
              </View>
              <View style={styles.profile_hearder_2_1_1}>
                <Text style={styles.profile_txt_1}>{followerCount}</Text>
                <Text style={styles.profile_txt_2}>Followers</Text>
              </View>
              <View style={styles.profile_hearder_2_1_1}>
                <Text style={styles.profile_txt_1}>{followingCount}</Text>
                <Text style={styles.profile_txt_2}>Follwing</Text>
              </View>
            </View>
            <View style={styles.profile_hearder_2_1}>
              {authorId?.length === 0 ? (
                <>
                  <TouchableOpacity
                    style={styles.profile_edit_button}
                    onPress={() => {
                      // navigation.navigate("Update Profile");
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
              ) : userId !== authorId ? (
                <>
                  <TouchableOpacity
                    style={[
                      styles.readscreen_follow_button,
                      {
                        backgroundColor: newFollow
                          ? "red"
                          : followData.FriendStatus
                          ? "yellow"
                          : "pink",
                        // backgroundColor: "#1178ff",
                        borderWidth: 0,
                      },
                    ]}
                    onPress={async () => {
                      if (newFollow) {
                        const resp = await axios.post(
                          `${commanApi}/follower/follow`,
                          {
                            FollowerId: 12,
                            UserId: 7,
                            FriendStatus: false,
                          }
                        );
                        resp.data.success ? console.log("followed") : "";
                      } else {
                        if (followData.FriendStatus) {
                          const resp = await axios.put(
                            `${commanApi}/follower/follow-back-or-unfollow/3`,
                            {
                              FriendStatus: false,
                            }
                          );
                          resp.data.success ? console.log("unfollowed") : "";
                        } else {
                          const resp = await axios.put(
                            `${commanApi}/follower/follow-back-or-unfollow/3`,
                            {
                              FriendStatus: true,
                            }
                          );
                          resp.data.success ? console.log("friend") : "";
                        }
                      }
                    }}
                  >
                    <Text style={[styles.readscreen_txt1, { color: "white" }]}>
                      {newFollow
                        ? "Follow"
                        : followData.FriendStatus
                        ? "friend"
                        : "follow back"}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.profile_message_button}
                    onPress={() => {
                      // navigation.navigate("Message");
                    }}
                  >
                    <Text style={styles.profile_message_button_text}>Chat</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    style={styles.profile_edit_button}
                    onPress={() => {
                      // navigation.navigate("Update Profile");
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
              )}
            </View>
            {/* </View> */}
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
                    // navigation.navigate("Story");
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

export default UserProfile;
