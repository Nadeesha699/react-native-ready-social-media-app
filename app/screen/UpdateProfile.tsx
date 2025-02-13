import { commanApi, StatusBars } from "@/app/components/components";
import { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import { View, ImageBackground, Dimensions, Text } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { launchImageLibrary } from "react-native-image-picker";
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
// const UpdateProfile = () => {
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
  const [uid, setUid] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const id = await AsyncStorage.getItem("Id");
      setUid(parseInt(id ?? "0"));
        const user = await axios.get(`${commanApi}/user/get-All/${uid}`);
        user.data.data ? setWaiting(false) : setWaiting(true);
        if (user.data.success) {
          setUpdateUser((prev) => ({
            ...prev,
            Name: user.data.data.Name,
            Email: user.data.data.Email,
            PhoneNumber: user.data.data.PhoneNumber,
            ProfileImage: user.data.data.ProfileImage,
            CoverImage: user.data.data.CoverImage,
            Bio: user.data.data.Bio,
          }));
        }
      } catch (e) {
        console.log(e);
      }
    };

    loadData();
  }, []);

  return (
    <>
      <StatusBars />
      <View
        style={[
          styles.profile_update_container,
          { backgroundColor: theme.background },
        ]}
      >
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
                      `${commanApi}/user/update/${uid}`,
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
                      ToastAndroid.show("Update Successful", 2000);
                    } else {
                      ToastAndroid.show(
                        "Update Failed. Please Try Again",
                        2000
                      );
                    }
                  } else {
                    ToastAndroid.show("Please fill all fields correctly", 2000);
                  }
                } catch (e) {
                  console.log(e);
                  ToastAndroid.show("Network Error. Please Try Again", 2000);
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
          <ActivityIndicator color="blue" size="large" style={{ flex: 1,backgroundColor:theme.background }} />
        ) : (
          <>
            <View style={styles.profile_update_hearder}>
              <ImageBackground
                style={styles.profile_update_hearder_1}
                source={
                  coverimageUri
                    ? { uri: coverimageUri }
                    : require("@/assets/images/3d-fantasy-scene.jpg")
                }
              >
                <View style={styles.profile_update_header_3}>
                  <TouchableOpacity
                    onPress={() => {
                      launchImageLibrary(
                        { mediaType: "photo" },
                        (response: any) => {
                          if (response.assets) {
                            setCoverImageUri(response.assets[0].uri);
                            // Convert image to base64
                            const uri = response.assets[0].uri;
                            fetch(uri)
                              .then((res) => res.blob())
                              .then((blob) => {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  setCoverBase64Image(
                                    (reader.result as string)?.split(",")[1]
                                  );
                                };
                                reader.readAsDataURL(blob);
                              });
                          }
                        }
                      );
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
                      : require("@/assets/images/40523.jpg")
                  }
                  style={styles.profile_update_image}
                >
                  <TouchableOpacity
                    onPress={() => {
                      launchImageLibrary(
                        { mediaType: "photo" },
                        (response: any) => {
                          if (response.assets) {
                            setProfileImageUri(response.assets[0].uri);
                            // Convert image to base64
                            const uri = response.assets[0].uri;
                            fetch(uri)
                              .then((res) => res.blob())
                              .then((blob) => {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  setProfileBase64Image(
                                    (reader.result as string)?.split(",")[1]
                                  );
                                };
                                reader.readAsDataURL(blob);
                              });
                          }
                        }
                      );
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
                  nameValidation(e) ? setNameError(false) : setNameError(true);
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
      </View>
    </>
  );
};

export default UpdateProfile;
