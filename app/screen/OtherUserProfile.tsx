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


import { NavigationProp } from '@react-navigation/native';
import { styles } from "@/css/main";

type TestScreenProps = {
  navigation: NavigationProp<any>; 
};

const OtherUserProfile: React.FC<TestScreenProps> = ({navigation}) => {



  
  return (
    <>
      <StatusBars />
      <View style={styles.profile_container}>
        <View style={styles.profile_hearder}>
          <ImageBackground
            style={styles.profile_hearder_1}
            source={require("@/assets/images/3d-fantasy-scene.jpg")}
          >
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
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
              
                  <TouchableOpacity style={styles.profile_edit_button}>
                    <Text style={styles.profile_edit_button_text}>Follow</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.profile_message_button}  onPress={() => {
                                    navigation.navigate("Message");
                                  }}>
                    <Text style={styles.profile_message_button_text}>
                      Chat
                    </Text>
                  </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.profile_body}>
          {uploadaData.map((e, Index) => {
            return (
              <TouchableOpacity style={styles.profile_story_card} key={Index} onPress={()=>{navigation.navigate('Story')}}>
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

// const styles = StyleSheet.create({
//   profile_container: {
//     flex: 1,
//     backgroundColor:"white"
//   },

//   profile_hearder: {
//     flex: 0.5,
//   },
//   profile_body: {
//     flex: 0.5,
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//     overflowX: "scroll",
//   },
//   profile_hearder_1: {
//     flex: 0.5,
//     width: "100%",
//     height: "100%",
//   },
//   profile_hearder_2: {
//     flex: 0.5,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   profile_hearder_2_1: {
//     flex: 0.25,
//     justifyContent: "space-evenly",
//     alignItems: "center",
//     flexDirection: "row",
//     width: "100%",
//   },
//   profile_hearder_2_2: {
//     flex: 0.5,
//     width: "100%",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "relative",
//   },
//   profile_image: {
//     position: "absolute",
//     bottom: "80%",
//     width: width * 0.3,
//     height: width * 0.3,
//     borderRadius: width * 0.2,
//     backgroundPosition: "center",
//     overflow: "hidden",
//   },

//   profile_hearder_2_1_1: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   profile_edit_button: {
//     backgroundColor: "#1178ff",
//     width: "30%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: width * 0.02,
//     borderRadius: width * 0.05,
//     color: "white",
//   },
//   profile_edit_button_text: {
//     color: "white",
//     fontWeight: "bold",
//     letterSpacing: width * 0.007,
//   },
//   profile_message_button: {
//     width: "30%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: width * 0.02,
//     borderRadius: width * 0.05,
//     color: "white",
//     borderWidth: width * 0.002,
//     borderColor: "#1178ff",
//   },
//   profile_message_button_text: {
//     color: "#1178ff",
//     fontWeight: "bold",
//     letterSpacing: width * 0.007,
//   },
//   profile_txt_1: {
//     fontWeight: "bold",
//     fontSize: width * 0.05,
//   },
//   profile_txt_2: {
//     fontWeight: "light",
//     fontSize: width * 0.03,
//   },
//   profile_story_card: {
//     width: "33.3%",
//     aspectRatio: 1,
//   },
//   profile_story_card_background: {
//     width: "100%",
//     height: "100%",
//     display: "flex",
//     justifyContent: "flex-end",
//   },
//   profile_txt_3: {
//     color: "white",
//     fontWeight: "bold",
//   },
//   profile_back_button: {
//     width: width * 0.1,
//     height: width * 0.1,
//     margin: width * 0.05,
//   },
// });

export default OtherUserProfile;
