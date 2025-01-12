import { StatusBars } from "@/app/components/components";
import { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, ImageBackground, Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationProp } from "@react-navigation/native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import { styles } from "@/css/main";

const { width } = Dimensions.get("window");

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const UpdateProfile: React.FC<TestScreenProps> = () => {
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [hidePassword, setHidePassword] = useState(true);

  
     const { isDarkMode } = useContext(ThemeContext);
        const theme = isDarkMode ? darkTheme : lightTheme;
        
  return (
    <>
      <StatusBars />
      <View style={[styles.profile_update_container,{backgroundColor:theme.background}]}>
        <View style={styles.profile_update_hearder}>
          <ImageBackground
            style={styles.profile_update_hearder_1}
            source={
              coverImage
                ? { uri: coverImage }
                : require("@/assets/images/3d-fantasy-scene.jpg")
            }
          >
            <View style={styles.profile_update_header_3}>
              <TouchableOpacity
                onPress={async () => {
                  let result = await ImagePicker.launchImageLibraryAsync({
                    quality: 1,
                    allowsEditing: true,
                    aspect: [6, 3],
                  });
                  if (!result.canceled) {
                    setCoverImage(result.assets[0].uri);
                  }
                }}
              >
                <Icon name="camera" color="white" size={width * 0.08} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={styles.profile_update_hearder_2}>
            <ImageBackground
              source={
                profileImage
                  ? { uri: profileImage }
                  : require("@/assets/images/40523.jpg")
              }
              style={styles.profile_update_image}
            >
              <TouchableOpacity
                onPress={async () => {
                  let result = await ImagePicker.launchImageLibraryAsync({
                    quality: 1,
                    allowsEditing: true,
                    aspect: [3, 3],
                  });
                  if (!result.canceled) {
                    setProfileImage(result.assets[0].uri);
                  }
                }}
              >
                <Icon name="camera" color="white" size={width * 0.08} />
              </TouchableOpacity>
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
            left={
              <TextInput.Icon
                icon={({ size }) => <Icon name="email" size={size} />}
              />
            }
          />
          <TextInput
            style={styles.input_field}
            label="Password"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
            secureTextEntry={hidePassword}
            left={
              <TextInput.Icon
                icon={({ size }) => <Icon name="lock" size={size} />}
              />
            }
            right={
              <TextInput.Icon
                icon={({ size }) => (
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
            left={
              <TextInput.Icon
                icon={({ size }) => <Icon name="account" size={size} />}
              />
            }
          />
          <TextInput
            style={styles.input_field}
            label="Contact Numeber"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
            left={
              <TextInput.Icon
                icon={({ size }) => <Icon name="phone" size={size} />}
              />
            }
          />
          <TextInput
            style={styles.input_field}
            label="Bio"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
            left={
              <TextInput.Icon
                icon={({ size }) => <Icon name="bio" size={size} />}
              />
            }
          />
        </View>
      </View>
    </>
  );
};

// const styles = StyleSheet.create({
  
// });

export default UpdateProfile;
