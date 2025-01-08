import { StatusBars } from "@/components/components";
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
  Dimensions,
} from "react-native";
import { TextInput } from "react-native-paper";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("window");

import { NavigationProp } from '@react-navigation/native';

type TestScreenProps = {
  navigation: NavigationProp<any>; 
};

const Register: React.FC<TestScreenProps> = ({navigation}) => {
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
            <Text style={styles.login_txt2}>Register with google</Text>
          </TouchableOpacity>
          <Text style={styles.sign_txt1}>OR</Text>
          <TextInput
            left={<TextInput.Icon icon={() => <Icon name="email" />} />}
            label="Email"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
            style={styles.input_field}
          />
          <TextInput
            left={<TextInput.Icon icon={() => <Icon name="account" />} />}
            label="Full Name"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
            style={styles.input_field}
          />
          <TextInput
            left={<TextInput.Icon icon={() => <Icon name="lock" />} />}
            label="Password"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
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
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
            style={styles.input_field}
          />
          <TouchableOpacity style={styles.btn_signup}>
            <Text style={styles.login_2}>Sign up</Text>
          </TouchableOpacity>
          <View style={styles.login_com1}>
            <Text style={[styles.login_txt3]}>back to</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login')
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
    fontSize: width * 0.035,
    color: "#a3a3a3",
    fontWeight: "bold",
  },
  login_img1: {
    width: width * 0.1,
    height: width * 0.1,
  },
  login_txt2: {
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  login_txt3: {
    fontSize: width * 0.038,
    color: "#a3a3a3",
  },
  login_txt4: {
    fontSize: width * 0.038,
    fontWeight: "bold",
    color: "#2b80ff",
  },
  login_img: {
    width: "80%",
    height: "80%",
  },
  sign_1: {
    fontSize: width * 0.1,
    fontWeight: "bold",
  },
  sign_header: {
    flex: 0.5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  sign_body: {
    paddingTop: "10%",
    flex: 0.5,
    justifyContent: "space-evenly",
    alignItems: "center",
    overflowY: "scroll",
    gap: "5%",
  },
  btn_signup: {
      backgroundColor: "#116cff",
    width: "80%",
    borderRadius: width * 0.05,
    padding: width * 0.02,
    justifyContent: "center",
    alignItems: "center",
  },
  login_2: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "white",
  },
  input_field: {
    borderRadius: width * 0.1,
    borderTopRightRadius: width * 0.1,
    borderTopLeftRadius: width * 0.1,
    width: "100%",
  },
  login_com1: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    gap:width*0.02,
    alignItems: "center",
    width: "100%",
  },
});

export default Register;
