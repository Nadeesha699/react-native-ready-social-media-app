import { StatusBars } from "@/components/components";
import React from "react";
import { Dimensions, ImageBackground, ScrollView } from "react-native";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";


const { width, height } = Dimensions.get("window");

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
    width: width*0.2,
    height: width*0.2,
    borderRadius: width*0.2,
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
    padding: width*0.02,
    borderRadius: width*0.05,
    color: "white",
  },
  profile_edit_button_text: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: width*0.007,
  },
  profile_message_button: {
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: width*0.02,
    borderRadius: width*0.05,
    color: "white",
    borderWidth: width*0.002,
    borderColor: "#fa2d6a",
  },
  profile_message_button_text: {
    color: "#fa2d6a",
    fontWeight: "bold",
    letterSpacing: width*0.007,
  },
  profile_txt_1: {
    fontWeight: "bold",
    fontSize: width*0.05,
  },
  profile_txt_2: {
    fontWeight: "light",
    fontSize: width*0.03,
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
    padding: width*0.02
  },
  profile_txt_3: {
    color: "white",
    fontWeight: "bold",
  },
  profile_back_button:{
    width: width*0.05,
    height: width*0.05,
    margin: width*0.05,
  }
});

export default Profile;
