import { GoogleLogin, StatusBars } from "@/components/components";
import { registerField } from "@/data/dumiData.jsx";
import {
  validateContactNO,
  validateEmail,
  validatePassword,
  validateUserName,
} from "@/scripts/scripts";
import { router } from "expo-router";
import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-paper";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Register = () => {
  const [passwordHide, setPasswordHide] = useState(true);

  return (
    <>
      <StatusBars />
      <View style={styles.sign_container}>
        <View style={styles.sign_header}>
          <Image
            source={require("@/assets/images/6333050.jpg")}
            alt="icon"
            style={styles.login_img}
          />
          <Text style={styles.sign_1}>Sign Up</Text>
        </View>
        <View style={styles.sign_body}>
          <TouchableOpacity style={styles.login_com1}>
            <Image
              source={require("@/assets/images/google_2504914.png")}
              style={styles.login_img1}
            />
            <Text style={styles.login_txt2}>Login with google</Text>
          </TouchableOpacity>
          <Text style={styles.sign_txt1}>OR</Text>
          <TextInput
            left={<TextInput.Icon icon={() => <Icon name="email" />} />}
            label="Email"
            mode="outlined"
            style={styles.input_field}
          />
          <TextInput
            left={<TextInput.Icon icon={() => <Icon name="account" />} />}
            label="Full Name"
            mode="outlined"
            style={styles.input_field}
          />
          <TextInput
            left={<TextInput.Icon icon={() => <Icon name="lock" />} />}
            label="Password"
            mode="outlined"
            style={styles.input_field}
            secureTextEntry={passwordHide}
            right={
              <TextInput.Icon
                icon={() => <Icon name={passwordHide ? "eye" : "eye-off"} />}
                onPress={() => {
                  passwordHide ? setPasswordHide(false) : setPasswordHide(true);
                }}
              />
            }
          />
          <TextInput
            left={<TextInput.Icon icon={() => <Icon name="phone" />} />}
            label="Phone Number"
            mode="outlined"
            style={styles.input_field}
          />
          <TouchableOpacity style={styles.btn_signup}>
            <Text style={styles.login_2}>Sign up</Text>
          </TouchableOpacity>
          <View style={styles.login_com1}>
            <Text style={[styles.login_txt3]}>back to</Text>
            <TouchableOpacity
              onPress={() => {
                router.navigate("/screen/Login");
              }}
            >
              <Text style={[styles.login_txt4]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sign_container: {
    flex: 1,
    padding: "5%",
  },
  sign_txt1: {
    fontSize: 15,
    color: "#a3a3a3",
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: "center",
  },
  sign_com1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    alignItems: "center",
  },
  login_img1: {
    width: 35,
    height: 35,
  },
  login_txt2: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  sign_com2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
  },
  login_txt3: {
    fontSize: 14,
    color: "#a3a3a3",
  },
  login_txt4: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2b80ff",
    letterSpacing: 2,
  },
  login_img: {
    width: "80%",
    height: "80%",
  },
  sign_1: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
    letterSpacing: 2,
    marginBottom: 20,
  },
  sign_header: {
    flex: 0.5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  sign_body: {
    flex: 0.5,
    justifyContent: "space-evenly",
    alignItems: "center",
    overflowY: "scroll",
  },
  btn_signup: {
    backgroundColor: "#ff1151",
    borderRadius: 50,
    padding: "3%",
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  login_2: {
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: "bold",
    color: "white",
  },
  input_field: {
    width: "100%",
  },
  login_com1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%",
  },
});

export default Register;
