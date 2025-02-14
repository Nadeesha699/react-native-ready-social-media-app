import { commanApi, emailRegex, StatusBars } from "@/app/components/components";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");

import { NavigationProp } from "@react-navigation/native";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { styles } from "@/css/main";
import axios from "axios";
import {
  contactValidation,
  emailValidation,
  nameValidation,
  passwordValidation,
} from "../validation/mainvalidation";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

// const Register: React.FC<TestScreenProps> = ({ navigation }) => {
  const Register = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const [passwordHide, setPasswordHide] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const translateXValue = useSharedValue(-200);
  const [registerData, setRegisterData] = useState({
    Name: "",
    Email: "",
    Password: "",
    PhoneNumber: "",
  });

  useEffect(() => {
    translateXValue.value = withSpring(0);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateXValue.value }],
  }));

  return (
    <>
      <StatusBars />
      <View
        style={[styles.sign_container, { backgroundColor: theme.background }]}
      >
        <Animated.View style={[styles.sign_header, animatedStyle]}>
          <Image
            source={require("@/assets/images/6333050.jpg")}
            alt="icon"
            style={[
              styles.login_img,
              { borderRadius: isDarkMode ? width * 1 : 0 },
            ]}
          />
          <Text style={[styles.sign_1, { color: theme.text }]}>Sign Up</Text>
        </Animated.View>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {/* <Animated.View style={[styles.sign_body, animatedStyle1]}> */}
          <TouchableOpacity style={styles.login_com1}>
            <Image
              source={require("@/assets/images/google_2504914.png")}
              style={styles.login_img1}
            />
            <Text style={[styles.login_txt2, { color: theme.text }]}>
              Register with google
            </Text>
          </TouchableOpacity>
          <Text style={styles.sign_txt1}>OR</Text>
          <TextInput
            onChangeText={(e) => {
              setRegisterData((prev) => ({ ...prev, Email: e }));
              emailValidation(e) ? setEmailError(false) : setEmailError(true);
              e === "" ? setEmailError(false) : "";
            }}
            value={registerData.Email}
            left={
              <TextInput.Icon
                icon={({ size }) => <Icon name="email" size={size} />}
              />
            }
            label="Email"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
            style={styles.input_field}
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
            value={registerData.Name}
            onChangeText={(e) => {
              setRegisterData((prev) => ({ ...prev, Name: e }));
              nameValidation(e) ? setNameError(false) : setNameError(true);
              e === "" ? setNameError(false) : "";
            }}
            left={
              <TextInput.Icon
                icon={({ size }) => <Icon name="account" size={size} />}
              />
            }
            label="Full Name"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
            style={styles.input_field}
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
              setRegisterData((prev) => ({ ...prev, Password: e }));
              passwordValidation(e)
                ? setPasswordError(false)
                : setPasswordError(true);
              e === "" ? setPasswordError(false) : "";
            }}
            value={registerData.Password}
            left={
              <TextInput.Icon
                icon={({ size }) => <Icon name="lock" size={size} />}
              />
            }
            label="Password"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
            style={styles.input_field}
            secureTextEntry={passwordHide}
            right={
              <TextInput.Icon
                icon={({ size }) => (
                  <Icon name={passwordHide ? "eye" : "eye-off"} size={size} />
                )}
                onPress={() => {
                  passwordHide ? setPasswordHide(false) : setPasswordHide(true);
                }}
              />
            }
          />
          <Text
            style={{
              ...styles.error_message,
              display: passwordError ? "flex" : "none",
            }}
          >
            Password must be 8+ characters with 1 uppercase letter & 1 number
          </Text>
          <TextInput
            onChangeText={(e) => {
              setRegisterData((prev) => ({ ...prev, PhoneNumber: e }));
              contactValidation(e)
                ? setPhoneNumberError(false)
                : setPhoneNumberError(true);
              e === "" ? setPhoneNumberError(false) : "";
            }}
            value={registerData.PhoneNumber}
            left={
              <TextInput.Icon
                icon={({ size }) => <Icon name="phone" size={size} />}
              />
            }
            label="Phone Number"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
            keyboardType="numeric"
            style={styles.input_field}
          />
          <Text
            style={{
              ...styles.error_message,
              display: phoneNumberError ? "flex" : "none",
            }}
          >
            Phone number must be exactly 10 digits
          </Text>
          <TouchableOpacity
            style={styles.btn_signup}
            onPress={async () => {
              try {
                if (
                  emailError === false &&
                  passwordError === false &&
                  nameError === false &&
                  phoneNumberError === false &&
                  registerData.Name.length !== 0 &&
                  registerData.Password.length !== 0 &&
                  registerData.Email.length !== 0 &&
                  registerData.PhoneNumber.length !== 0
                ) {
                  const resp = await axios.post(`${commanApi}/user/register`, {
                    Name: registerData.Name,
                    Email: registerData.Email,
                    Password: registerData.Password,
                    PhoneNumber: registerData.PhoneNumber,
                  });
                  if (resp.data.success) {
                    ToastAndroid.show("Registration Successful", 2000);
                  } else {
                    ToastAndroid.show(
                      "Registration Failed. Please Try Again",
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
            <Text style={styles.login_2}>Sign up</Text>
          </TouchableOpacity>
          <View style={styles.login_com1}>
            <Text style={[styles.login_txt3]}>back to</Text>
            <TouchableOpacity
              onPress={() => {
                // navigation.goBack();
              }}
            >
              <Text style={[styles.login_txt4]}>Login</Text>
            </TouchableOpacity>
          </View>
          {/* </Animated.View> */}
        </ScrollView>
      </View>
    </>
  );
};

export default Register;
