import { commanApi, StatusBars } from "@/app/components/components";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { TextInput } from "react-native-paper";

const { width, height } = Dimensions.get("window");

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
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const Login: React.FC<TestScreenProps> = ({ navigation }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const [hidePassword, setHidePassword] = useState(true);
  const translateXValue = useSharedValue(-200);
  const translateXValue1 = useSharedValue(0);
  const [loginData, setLoginData] = useState({
    Email: "",
    Password: "",
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
    <View
      style={[styles.login_container, { backgroundColor: theme.background }]}
    >
      <Animated.View style={[styles.login_header, animatedStyle]}>
        <Image
          source={require("@/assets/images/6333040.jpg")}
          alt="icon"
          style={[
            styles.login_img,
            { borderRadius: isDarkMode ? width * 1 : 0 },
          ]}
        />
        <Text style={[styles.login_1, { color: theme.text }]}>Login</Text>
      </Animated.View>
      <Animated.View style={[styles.login_body, animatedStyle1]}>
        <TextInput
          onChangeText={(e) => {
            setLoginData((prev) => ({ ...prev, Email: e }));
          }}
          value={loginData.Email}
          left={
            <TextInput.Icon
              icon={({ size }) => <Icon name="email" size={size} />}
            />
          }
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          mode="flat"
          label="Email"
          style={styles.input_field}
        />
        <TextInput
          onChangeText={(e) => {
            setLoginData((prev) => ({ ...prev, Password: e }));
          }}
          value={loginData.Password}
          left={
            <TextInput.Icon
              icon={({ size }) => <Icon name="lock" size={size} />}
            />
          }
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          mode="flat"
          label="Password"
          secureTextEntry={hidePassword}
          right={
            <TextInput.Icon
              icon={({ size }) => (
                <Icon name={hidePassword ? "eye" : "eye-off"} size={size} />
              )}
              onPress={() => {
                hidePassword ? setHidePassword(false) : setHidePassword(true);
              }}
            />
          }
          style={styles.input_field}
        />
        <TouchableOpacity
          style={styles.btn_sign}
          onPress={async () => {
            try {
              if (
                loginData.Email.length !== 0 &&
                loginData.Password.length !== 0
              ) {
                const resp = await axios.get(
                  `${commanApi}/user/login?Email=${loginData.Email}&Password=${loginData.Password}`
                );

                if (resp.data.success) {
                  const id = resp.data.data.Id.toString();
                  await AsyncStorage.setItem("Id", id);
                  await AsyncStorage.setItem("logged", "1");
                  await AsyncStorage.setItem("newComer", "1");
                  navigation.navigate("Main");
                } else {
                  Alert.alert(
                    "Oops!",
                    "We couldn't find an account with those details. Please check your email and password."
                  );
                  navigation.navigate("Login");
                }
              } else {
                Alert.alert(
                  "Oops!",
                  "Please enter both your email and password to log in."
                );
              }
            } catch (e) {
              console.log(e);
              Alert.alert(
                "Something went wrong!",
                "It seems we're having trouble connecting. Please try again later."
              );
              navigation.navigate("Login");
            }
          }}
        >
          <Text style={styles.login_2}>Sign in</Text>
        </TouchableOpacity>
        <View style={styles.login_com1}>
          <Text style={[styles.login_txt3]}>if you are new user ?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={[styles.login_txt4]}>Register</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default Login;
