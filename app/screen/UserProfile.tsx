import { StatusBars } from "@/app/components/components";
import { navigate } from "expo-router/build/global-state/routing";
import React, { useEffect, useState } from "react";
import { Dimensions, ImageBackground, ScrollView } from "react-native";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

// const uploadaData = [
//   { name: "Story Name" },
//   { name: "Story Name" },
//   { name: "Story Name" },
//   { name: "Story Name" },
//   { name: "Story Name" },
//   { name: "Story Name" },
//   { name: "Story Name" },
//   { name: "Story Name" },
//   { name: "Story Name" },
//   { name: "Story Name" },
//   { name: "Story Name" },
//   { name: "Story Name" },
//   { name: "Story Name" },
//   { name: "Story Name" },
//   { name: "Story Name" },
// ];

import { NavigationProp } from "@react-navigation/native";
import { styles } from "@/css/main";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const UserProfile: React.FC<TestScreenProps> = ({ navigation }) => {
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

  const [storyCount, setStoryCount] = useState(0);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      // let userIds = await AsyncStorage.getItem("userId");
      // let authorIds = await AsyncStorage.getItem("author_id");
      // setUserId(userIds);
      // setAuthorId(authorIds);
        const id = await AsyncStorage.getItem("Id");
        const resp1 = await axios.get(
          "http://192.168.1.82:4000/api/story/get-all"
        );
        setStoryData(resp1.data.data);
        setStoryCount(storyData.length);

        const resp2 = await axios.get(
          `http://192.168.1.82:4000/api/following/get-all/by-id/${id}`
        );
        setFollowingCount(resp2.data.data.length);

        const resp3 = await axios.get(
          `http://192.168.1.82:4000/api/follower/get-all/by-id/${id}`
        );
        setFollowerCount(resp3.data.data.length);

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
            source={require("@/assets/images/3d-fantasy-scene.jpg")}
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
                source={require("@/assets/images/40523.jpg")}
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
              ) : userId !== authorId ? (
                <>
                  <TouchableOpacity style={styles.profile_edit_button}>
                    <Text style={styles.profile_edit_button_text}>Follow</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.profile_message_button}
                    onPress={() => {
                      navigation.navigate("Message");
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

export default UserProfile;
