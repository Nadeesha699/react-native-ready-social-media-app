import { StatusBars } from "@/components/components";
import React from "react";
import { ImageBackground, ScrollView } from "react-native";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Profile = () => {
  return (
    <>
      <StatusBars />
      <View style={styles.profile_container}>
        <View style={styles.profile_hearder}>
          <ImageBackground
            style={styles.profile_hearder_1}
            source={require("@/assets/images/3d-fantasy-scene.jpg")}
          >
            <TouchableOpacity>
              <ImageBackground source={require('@/assets/images/left-arrow.png')} style={styles.profile_back_button}/>
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
                <Text style={styles.profile_edit_button_text}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.profile_message_button}>
                <Text style={styles.profile_message_button_text}>Message</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.profile_body}>
          <TouchableOpacity style={styles.profile_story_card}>
            <ImageBackground
              source={require("@/assets/images/beautiful-anime-character-cartoon-scene.jpg")}
              style={styles.profile_story_card_background}
            >
              <Text style={styles.profile_txt_3}>Story Name</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profile_story_card}>
            <ImageBackground
              source={require("@/assets/images/beautiful-anime-character-cartoon-scene.jpg")}
              style={styles.profile_story_card_background}
            >
              <Text style={styles.profile_txt_3}>Story Name</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profile_story_card}>
            <ImageBackground
              source={require("@/assets/images/beautiful-anime-character-cartoon-scene.jpg")}
              style={styles.profile_story_card_background}
            >
              <Text style={styles.profile_txt_3}>Story Name</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profile_story_card}
          ><ImageBackground
          source={require("@/assets/images/beautiful-anime-character-cartoon-scene.jpg")}
          style={styles.profile_story_card_background}
        >
         <Text style={styles.profile_txt_3}>Story Name</Text>
        </ImageBackground> </TouchableOpacity>

          <TouchableOpacity style={styles.profile_story_card}>
            <ImageBackground
              source={require("@/assets/images/beautiful-anime-character-cartoon-scene.jpg")}
              style={styles.profile_story_card_background}
            >
              <Text style={styles.profile_txt_3}>Story Name</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profile_story_card}>
            <ImageBackground
              source={require("@/assets/images/beautiful-anime-character-cartoon-scene.jpg")}
              style={styles.profile_story_card_background}
            >
              <Text style={styles.profile_txt_3}>Story Name</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profile_story_card}>
            <ImageBackground
              source={require("@/assets/images/beautiful-anime-character-cartoon-scene.jpg")}
              style={styles.profile_story_card_background}
            >
              <Text style={styles.profile_txt_3}>Story Name</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profile_story_card}>
            <ImageBackground
              source={require("@/assets/images/beautiful-anime-character-cartoon-scene.jpg")}
              style={styles.profile_story_card_background}
            >
              <Text style={styles.profile_txt_3}>Story Name</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profile_story_card}>
            <ImageBackground
              source={require("@/assets/images/beautiful-anime-character-cartoon-scene.jpg")}
              style={styles.profile_story_card_background}
            >
              <Text style={styles.profile_txt_3}>Story Name</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profile_story_card}>
            <ImageBackground
              source={require("@/assets/images/beautiful-anime-character-cartoon-scene.jpg")}
              style={styles.profile_story_card_background}
            >
              <Text style={styles.profile_txt_3}>Story Name</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profile_story_card}>
            <ImageBackground
              source={require("@/assets/images/beautiful-anime-character-cartoon-scene.jpg")}
              style={styles.profile_story_card_background}
            >
              <Text style={styles.profile_txt_3}>Story Name</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  profile_container: {
    flex: 1,
  },

  profile_hearder: {
    flex: 0.5,
  },
  profile_body: {
    flex: 0.5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    overflowX: "scroll",
  },
  profile_hearder_1: {
    flex: 0.5,
    width: "100%",
    height: "100%",
  },
  profile_hearder_2: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  profile_hearder_2_1: {
    flex: 0.25,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  profile_hearder_2_2: {
    flex: 0.5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  profile_image: {
    position: "absolute",
    bottom: "80%",
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundPosition: "center",
    overflow: "hidden",
  },

  profile_hearder_2_1_1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profile_edit_button: {
    backgroundColor: "#fa2d6a",
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    color: "white",
  },
  profile_edit_button_text: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  profile_message_button: {
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    color: "white",
    borderWidth: 2,
    borderColor: "#fa2d6a",
  },
  profile_message_button_text: {
    color: "#fa2d6a",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  profile_txt_1: {
    fontWeight: "bold",
    fontSize: 20,
  },
  profile_txt_2: {
    fontWeight: "light",
    fontSize: 12,
  },
  profile_story_card: {
    width: "33.3%",
    aspectRatio: 1,
  },
  profile_story_card_background: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    padding: 10,
  },
  profile_txt_3: {
    color: "white",
    fontWeight: "bold",
  },
  profile_back_button:{
    width:20,
    height:20,
    margin:20
  }
});

export default Profile;
