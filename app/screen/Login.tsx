import { StatusBars } from "@/components/components";
import { validateEmail, validatePassword } from "@/scripts/scripts";
import { router } from "expo-router";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import { useState } from "react";
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

const { width, height } = Dimensions.get("window");

import { NavigationProp } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const Login: React.FC<TestScreenProps> = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <>
      <StatusBars />
      <View style={styles.login_container}>
        <View style={styles.login_header}>
          <Image
            source={require("@/assets/images/6333040.jpg")}
            alt="icon"
            style={[styles.login_img]}
          />
          <Text style={[styles.login_1]}>Login</Text>
        </View>
        <View style={styles.login_body}>
          <TouchableOpacity style={styles.login_com1}>
            <Image
              source={require("@/assets/images/google_2504914.png")}
              style={styles.login_img1}
            />
            <Text style={styles.login_txt2}>Login with google</Text>
          </TouchableOpacity>
          <Text style={styles.sign_txt1}>OR</Text>
          <TextInput
            left={<TextInput.Icon icon={({size}) => <Icon name="email" size={size}/>} />}
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
            label="Email"
            style={styles.input_field}
          />
          <TextInput
            left={<TextInput.Icon icon={({size}) => <Icon name="lock" size={size}/>} />}
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
            label="Password"
            secureTextEntry={hidePassword}
            right={
              <TextInput.Icon
                icon={({size}) => <Icon name={hidePassword ? "eye" : "eye-off"} size={size} />}
                onPress={() => {
                  hidePassword ? setHidePassword(false) : setHidePassword(true);
                }}
              />
            }
            style={styles.input_field}
          />
          <TouchableOpacity
            style={styles.btn_sign}
            onPress={() => {
              navigation.navigate("Main");
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
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  login_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
    backgroundColor:"white"
  },
  login_img1: {
    width: width * 0.1,
    height: width * 0.1,
  },
  login_com1: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    gap:width*0.02,
    alignItems: "center",
    width: "100%",
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
  login_1: {
    fontSize: width * 0.1,
    fontWeight: "bold",
  },
  login_2: {
    fontSize: width * 0.05,
    letterSpacing: width * 0.007,
    fontWeight: "bold",
    color: "white",
  },
  login_header: {
    flex: 0.5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  login_body: {
    flex: 0.5,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  btn_sign: {
    backgroundColor: "#116cff",
    width: "80%",
    borderRadius: width * 0.05,
    padding: width * 0.02,
    justifyContent: "center",
    alignItems: "center",
  },
  input_field: {
    borderRadius: width * 0.1,
    borderTopRightRadius: width * 0.1,
    borderTopLeftRadius: width * 0.1,
    width: "100%",
  },
  sign_txt1: {
    fontSize: width * 0.035,
    color: "#a3a3a3",
    fontWeight: "bold",
  },
});

export default Login;
