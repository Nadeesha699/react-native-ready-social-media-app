import { StatusBars } from "@/components/components";
import { useState } from "react";
// import { styles } from "@/css/main";
import { StyleSheet } from "react-native";
import { View, ImageBackground, Text, TouchableOpacity,Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("window");

const UpdateProfile = () => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <>
      <StatusBars />
      <View style={styles.profile_update_container}>
        <View style={styles.profile_update_hearder}>
          <ImageBackground
            style={styles.profile_update_hearder_1}
            source={require("@/assets/images/3d-fantasy-scene.jpg")}
          >
            <TouchableOpacity>
              <ImageBackground
                source={require("@/assets/images/left-arrow.png")}
                style={styles.profile_back_button}
              />
            </TouchableOpacity>
            <View style={styles.profile_update_header_3}>
            <Icon name="camera" color="white" size={width*0.08}/>
            </View>
          </ImageBackground>
          <View style={styles.profile_update_hearder_2}>
            <ImageBackground
              source={require("@/assets/images/40523.jpg")}
              style={styles.profile_update_image}
            >
              <Icon name="camera" color="white" size={width*0.08}/>
              </ImageBackground>
          </View>
        </View>
        <View style={styles.profile_update_body}>
          <TextInput
            style={styles.input_field}
            label="Email"
            left={<TextInput.Icon icon={() => <Icon name="email" />} />}
            mode="outlined"
          />
          <TextInput
            style={styles.input_field}
            label="Password"
            secureTextEntry={hidePassword}
            left={<TextInput.Icon icon={() => <Icon name="lock" />} />}
            right={
              <TextInput.Icon
                icon={() => (
                  <Icon
                    name={hidePassword ? "eye" : "eye-off"}
                    onPress={() => {
                      hidePassword
                        ? setHidePassword(false)
                        : setHidePassword(true);
                    }}
                  />
                )}
              />
            }
            mode="outlined"
          />
          <TextInput
            style={styles.input_field}
            label="Full Name"
            left={<TextInput.Icon icon={() => <Icon name="account" />} />}
            mode="outlined"
          />
          <TextInput
            style={styles.input_field}
            label="Contact Numeber"
            left={<TextInput.Icon icon={() => <Icon name="phone" />} />}
            mode="outlined"
          />
          <TextInput
            style={styles.input_field}
            label="Bio"
            left={<TextInput.Icon icon={() => <Icon name="bio" />} />}
            mode="outlined"
          />
          <TouchableOpacity style={styles.btn_edit}>
            <Text style={styles.login_2}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  profile_update_container: {
    flex: 1,
  },

  profile_update_hearder: {
    flex: 0.3,
  },
  profile_update_body: {
    flex: 0.7,
    flexDirection: "column",
    justifyContent:"space-around",
    alignItems: "center",
    overflowY: "scroll",
    padding:"5%",
  },
  profile_update_hearder_1: {
    flex: 0.9,
    width: "100%",
    height: "100%",
   justifyContent:"flex-start",
   flexDirection:"column",
   alignItems:"flex-start"
  },
  profile_update_hearder_2: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"
  },
  profile_back_button: {
    width: width*0.05,
    height: width*0.05,
    margin: width*0.05,
  },

  profile_update_image: {
    position: "absolute",
    bottom: width*0.005,
    width: width*0.25,
    height: width*0.25,
    borderRadius:  width*0.5,
    backgroundPosition: "center",
    overflow: "hidden",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  input_field: {
    width: "100%",
  },
  btn_edit: {
    backgroundColor: "#45ff25",
    width: "80%",
    borderRadius: width * 0.05,
    padding: width * 0.02,
    justifyContent: "center",
    alignItems: "center",
  },
  login_2: {
    fontSize: width * 0.05,
    letterSpacing: width * 0.007,
    fontWeight: "bold",
    color: "white",
  },
  profile_update_header_3:{
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
});

export default UpdateProfile;
