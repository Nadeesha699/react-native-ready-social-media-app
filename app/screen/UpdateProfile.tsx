import { commanApi, StatusBars } from "@/app/components/components";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
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

const { width } = Dimensions.get("window");

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const UpdateProfile: React.FC<TestScreenProps> = ({navigation}) => {

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
    Name: "Nadeesha",
    Email: "bcdbcdhbdh@gmail.com",
    Password: "bcfbhbfh",
    PhoneNumber: "cbhbhc",
    Bio: "cdbdbhbch",
  });


  useEffect(() => {
    const loadData = async () => {
      let id = await AsyncStorage.getItem("Id");
      const user = await axios.get(
        `${commanApi}/user/get-All/${id} `
      );
      setUpdateUser((prev) => ({
        ...prev,
        Name: user.data.data.Name,
        Email: user.data.data.Email,
        PhoneNumber: user.data.data.PhoneNumber,
        ProfileImage: user.data.data.ProfileImage,
        CoverImage: user.data.data.CoverImage,
        Bio: user.data.data.Bio,
      }));
      
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
              navigation.goBack()
            }}
          >
            <Icon name={"close"} size={width * 0.06} color={"red"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              const resp = await axios.put(
                `${commanApi}/user/update/15`,
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
              resp.data.success === true
                ? console.log("edited")
                : console.log("unedited");
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
        </View>
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
          <TextInput
            onChangeText={(e) => {
              setUpdateUser((prev) => ({ ...prev, Password: e }));
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
          <TextInput
            onChangeText={(e) => {
              setUpdateUser((prev) => ({ ...prev, Name: e }));
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
      </View>
    </>
  );
};


export default UpdateProfile;
