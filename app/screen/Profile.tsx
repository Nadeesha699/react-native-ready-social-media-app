import { StatusBars } from "@/app/components/components";
import { navigate } from "expo-router/build/global-state/routing";
import React, { useEffect, useState } from "react";
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

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const Profile: React.FC<TestScreenProps> = ({ navigation }) => {
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
              <Text style={styles.profile_txt_1}>Nadeesha Ruwandima</Text>
              <Text style={styles.profile_txt_2}>
                I am nadeesha ruwandima and I have one brother
              </Text>
            </View>
            <View style={styles.profile_hearder_2_1}>
              <View style={styles.profile_hearder_2_1_1}>
                <Text style={styles.profile_txt_1}>1000</Text>
                <Text style={styles.profile_txt_2}>Story</Text>
              </View>
              <View style={styles.profile_hearder_2_1_1}>
                <Text style={styles.profile_txt_1}>1000</Text>
                <Text style={styles.profile_txt_2}>Followers</Text>
              </View>
              <View style={styles.profile_hearder_2_1_1}>
                <Text style={styles.profile_txt_1}>100</Text>
                <Text style={styles.profile_txt_2}>Follwing</Text>
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
          {uploadaData.map((e, Index) => {
            return (
              <TouchableOpacity
                style={styles.profile_story_card}
                key={Index}
                onPress={() => {
                  navigation.navigate("Story");
                }}
              >
                <ImageBackground
                  source={require("@/assets/images/beautiful-anime-character-cartoon-scene.jpg")}
                  style={styles.profile_story_card_background}
                >
                  <Text style={styles.profile_txt_3}>{e.name}</Text>
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
