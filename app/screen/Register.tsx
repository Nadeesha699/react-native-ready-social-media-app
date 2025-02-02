import { commanApi, StatusBars } from "@/app/components/components";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
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
  withTiming,
} from "react-native-reanimated";
import { styles } from "@/css/main";
import axios from "axios";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const Register: React.FC<TestScreenProps> = ({ navigation }) => {
  
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [passwordHide, setPasswordHide] = useState(true);

  const translateXValue = useSharedValue(-200);
  const translateXValue1 = useSharedValue(0);

  const [registerData, setRegisterData] = useState({
    Name: "",
    Email: "",
    Password: "",
    PhoneNumber: "",
  });

  useEffect(() => {
    translateXValue.value = withSpring(0);
    translateXValue1.value = withTiming(1, { duration: 2000 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateXValue.value }],
  }));

  const animatedStyle1 = useAnimatedStyle(() => ({
    opacity: translateXValue1.value,
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
        <Animated.View style={[styles.sign_body, animatedStyle1]}>
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
          <TextInput
            value={registerData.Name}
            onChangeText={(e) => {
              setRegisterData((prev) => ({ ...prev, Name: e }));
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
          <TextInput
            onChangeText={(e) => {
              setRegisterData((prev) => ({ ...prev, Password: e }));
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
          <TextInput
            onChangeText={(e) => {
              setRegisterData((prev) => ({ ...prev, PhoneNumber: e }));
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
            style={styles.input_field}
          />
          <TouchableOpacity
            style={styles.btn_signup}
            onPress={async () => {
              try {
                const resp = await axios.post(
                  `${commanApi}/user/register`,
                  {
                    Name: registerData.Name,
                    Email: registerData.Email,
                    Password: registerData.Password,
                    PhoneNumber: registerData.PhoneNumber
                  }
                );
                resp.data.success
                  ? console.log("success")
                  : console.log("unsucess");
              } catch (e) {
                console.log(e);
              }
            }}
          >
            <Text style={styles.login_2}>Sign up</Text>
          </TouchableOpacity>
          <View style={styles.login_com1}>
            <Text style={[styles.login_txt3]}>back to</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={[styles.login_txt4]}>Login</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </>
  );
};


export default Register;
