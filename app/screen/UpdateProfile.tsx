import { StatusBars } from "@/components/components";
import { useState } from "react";
import { StyleSheet } from "react-native";
import {
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationProp } from "@react-navigation/native";
import React from "react";

const { width} = Dimensions.get("window");

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const UpdateProfile: React.FC<TestScreenProps> = () => {
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
            <View style={styles.profile_update_header_3}>
              <Icon name="camera" color="white" size={width * 0.08} />
            </View>
          </ImageBackground>
          <View style={styles.profile_update_hearder_2}>
            <ImageBackground
              source={require("@/assets/images/40523.jpg")}
              style={styles.profile_update_image}
            >
              <Icon name="camera" color="white" size={width * 0.08} />
            </ImageBackground>
          </View>
        </View>
        <View style={styles.profile_update_body}>
          <TextInput
            style={styles.input_field}
            label="Email"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
            left={<TextInput.Icon icon={({size}) => <Icon name="email"size={size} />} />}
          />
          <TextInput
            style={styles.input_field}
            label="Password"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
            secureTextEntry={hidePassword}
            left={<TextInput.Icon icon={({size}) => <Icon name="lock" size={size}/>} />}
            right={
              <TextInput.Icon
                icon={({size}) => (
                  <Icon
                    name={hidePassword ? "eye" : "eye-off"}
                    onPress={() => {
                      hidePassword
                        ? setHidePassword(false)
                        : setHidePassword(true);
                    }}
                    size={size}
                  />
                )}
              />
            }
          />
          <TextInput
            style={styles.input_field}
            label="Full Name"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
            left={<TextInput.Icon icon={({size}) => <Icon name="account" size={size}/>} />}
          />
          <TextInput
            style={styles.input_field}
            label="Contact Numeber"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
            left={<TextInput.Icon icon={({size}) => <Icon name="phone" size={size}/>} />}
          />
          <TextInput
            style={styles.input_field}
            label="Bio"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
            left={<TextInput.Icon icon={({size}) => <Icon name="bio"size={size} />} />}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  profile_update_container: {
    flex: 1,
    backgroundColor:"white"
  },

  profile_update_hearder: {
    flex: 0.3,
  },
  profile_update_body: {
    flex: 0.7,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    overflowY: "scroll",
    padding: "5%",
  },
  profile_update_hearder_1: {
    flex: 0.9,
    width: "100%",
    height: "100%",
    padding: width * 0.05,
  },
  profile_update_hearder_2: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },

  profile_update_image: {
    position: "absolute",
    bottom: width * 0.005,
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.5,
    backgroundPosition: "center",
    overflow: "hidden",
    display: "flex",
    justifyContent:"center",
    alignItems:"center"
  },
  input_field: {
    borderRadius: width * 0.1,
    borderTopRightRadius: width * 0.1,
    borderTopLeftRadius: width * 0.1,
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
  profile_update_header_3: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: "100%",
  },
  header_name: {
    color: "white",
    fontWeight: "bold",
    fontSize: width * 0.05,
  },
});

export default UpdateProfile;
