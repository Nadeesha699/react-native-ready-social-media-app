import {
  ActivityIndicatorsSaving,
  commanApi,
  StatusBars,
} from "@/app/components/components";
import { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import { View, ImageBackground, Dimensions, Text } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationProp } from "@react-navigation/native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import { styles } from "@/css/main";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  emailValidation,
  nameValidation,
  passwordValidation,
} from "../validation/mainvalidation";

const { width } = Dimensions.get("window");

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const UpdateProfile: React.FC<TestScreenProps> = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const [coverimageUri, setCoverImageUri] = useState<string | null>(null);
  const [coverbase64Image, setCoverBase64Image] = useState<string | null>(null);
  const [profileimageUri, setProfileImageUri] = useState<string | null>(null);
  const [profilebase64Image, setProfileBase64Image] = useState<string | null>(
    null
  );
  const [updateUser, setUpdateUser] = useState({
    Name: "",
    Email: "",
    Password: "",
    PhoneNumber: "",
    Bio: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [waiting, setWaiting] = useState(true);
  const [waitingForSaving, setWaitingForSaving] = useState(false);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const id = await AsyncStorage.getItem("Id");
      const user = await axios.get(`${commanApi}/user/get-All/${id}`);
      user.data.data[0].length !== 0 ? setWaiting(false) : setWaiting(true);
      if (user.data.data[0].length !== 0) {
        setUpdateUser((prev) => ({
          ...prev,
          Name: user.data.data[0].Name,
          Email: user.data.data[0].Email,
          PhoneNumber: user.data.data[0].PhoneNumber,
          ProfileImage: user.data.data[0].ProfileImage,
          CoverImage: user.data.data[0].CoverImage,
          Bio: user.data.data[0].Bio,
        }));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View
      style={[
        styles.profile_update_container,
        { backgroundColor: theme.background },
      ]}
    >
      {waitingForSaving ? (
        <ActivityIndicatorsSaving />
      ) : (
        <>
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name={"close"} size={width * 0.06} color={"red"} />
            </TouchableOpacity>
            {waiting ? (
              ""
            ) : (
              <TouchableOpacity
                onPress={async () => {
                  try {
                    setWaitingForSaving(true);
                    const id = await AsyncStorage.getItem("Id");
                    if (
                      emailError === false &&
                      passwordError === false &&
                      nameError === false &&
                      phoneNumberError === false &&
                      updateUser.Name.length !== 0 &&
                      updateUser.Password.length !== 0 &&
                      updateUser.Email.length !== 0 &&
                      updateUser.PhoneNumber.length !== 0 &&
                      updateUser.Bio.length !== 0 &&
                      profilebase64Image?.length !== 0 &&
                      coverbase64Image?.length !== 0
                    ) {
                      const resp = await axios.put(
                        `${commanApi}/user/update/${id}`,
                        {
                          Name: updateUser.Name,
                          Email: updateUser.Email,
                          Password: updateUser.Password,
                          PhoneNumber: updateUser.PhoneNumber,
                          ProfileImage: profilebase64Image,
                          CoverImage: coverbase64Image,
                          Bio: updateUser.Bio,
                        }
                      );

                      if (resp.data.success) {
                        ToastAndroid.show(
                          "Your profile has been updated successfully!",
                          2000
                        );
                      } else {
                        Alert.alert("Oops! Update failed. Please try again.");
                      }
                    } else {
                      Alert.alert(
                        "Please fill out all fields correctly and completely."
                      );
                    }
                    setWaitingForSaving(false);
                  } catch (e) {
                    console.log(e);
                    Alert.alert(
                      "There was an error connecting. Please try again later."
                    );
                  }
                }}
              >
                <Text
                  style={{
                    color: "#1178ff",
                    fontWeight: "bold",
                    padding: width * 0.02,
                  }}
                >
                  edit
                </Text>
              </TouchableOpacity>
            )}
          </View>
          {waiting ? (
            <ActivityIndicator
              color="blue"
              size="large"
              style={{ flex: 1, backgroundColor: theme.background }}
            />
          ) : (
            <>
              <View style={styles.profile_update_hearder}>
                <ImageBackground
                  style={styles.profile_update_hearder_1}
                  source={
                    coverimageUri
                      ? { uri: coverimageUri }
                      : require("@/assets/images/nophoto.png")
                  }
                >
                  <View style={styles.profile_update_header_3}>
                    <TouchableOpacity
                      onPress={async () => {
                        const permissionResult =
                          await ImagePicker.requestMediaLibraryPermissionsAsync();
                        if (permissionResult.status !== "granted") {
                          Alert.alert(
                            "Permission Required",
                            "You need to grant access to your gallery."
                          );
                          return;
                        }

                        const result =
                          await ImagePicker.launchImageLibraryAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.Images,
                            base64: true,
                            quality: 1,
                          });

                        if (!result.canceled) {
                          setCoverImageUri(result.assets[0].uri);
                          setCoverBase64Image(result.assets[0].base64 ?? null);
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
                      profileimageUri
                        ? { uri: profileimageUri }
                        : require("@/assets/images/21666259.jpg")
                    }
                    style={styles.profile_update_image}
                  >
                    <TouchableOpacity
                      onPress={async () => {
                        const permissionResult =
                          await ImagePicker.requestMediaLibraryPermissionsAsync();
                        if (permissionResult.status !== "granted") {
                          Alert.alert(
                            "Permission Required",
                            "You need to grant access to your gallery."
                          );
                          return;
                        }

                        const result =
                          await ImagePicker.launchImageLibraryAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.Images,
                            base64: true,
                            quality: 1,
                          });
                        if (!result.canceled) {
                          setProfileImageUri(result.assets[0].uri);
                          setProfileBase64Image(
                            result.assets[0].base64 ?? null
                          );
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
                  onChangeText={(e) => {
                    setUpdateUser((prev) => ({ ...prev, Email: e }));
                    emailValidation(e)
                      ? setEmailError(false)
                      : setEmailError(true);
                    e === "" ? setEmailError(false) : "";
                  }}
                  value={updateUser.Email}
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
                <Text
                  style={{
                    ...styles.error_message,
                    display: emailError ? "flex" : "none",
                  }}
                >
                  Please enter a valid email address
                </Text>
                <TextInput
                  onChangeText={(e) => {
                    setUpdateUser((prev) => ({ ...prev, Password: e }));
                    passwordValidation(e)
                      ? setPasswordError(false)
                      : setPasswordError(true);
                    e === "" ? setPasswordError(false) : "";
                  }}
                  value={updateUser.Password}
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
                <Text
                  style={{
                    ...styles.error_message,
                    display: passwordError ? "flex" : "none",
                  }}
                >
                  Password must be 8+ characters with 1 uppercase letter & 1
                  number
                </Text>
                <TextInput
                  onChangeText={(e) => {
                    setUpdateUser((prev) => ({ ...prev, Name: e }));
                    nameValidation(e)
                      ? setNameError(false)
                      : setNameError(true);
                    e === "" ? setNameError(false) : "";
                  }}
                  value={updateUser.Name}
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
                <Text
                  style={{
                    ...styles.error_message,
                    display: nameError ? "flex" : "none",
                  }}
                >
                  Name can only contain letters and spaces
                </Text>
                <TextInput
                  onChangeText={(e) => {
                    setUpdateUser((prev) => ({ ...prev, PhoneNumber: e }));
                  }}
                  value={updateUser.PhoneNumber}
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
                  onChangeText={(e) => {
                    setUpdateUser((prev) => ({ ...prev, Bio: e }));
                  }}
                  value={updateUser.Bio}
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
            </>
          )}
        </>
      )}
    </View>
  );
};

export default UpdateProfile;
