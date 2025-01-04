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
} from "react-native";
import { TextInput } from "react-native-paper";

const Login = () => {
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
            left={<TextInput.Icon icon={() => <Icon name="email" />} />}
            mode="outlined"
            label="Email"
            style={styles.input_field}
          />
          <TextInput
            left={<TextInput.Icon icon={() => <Icon name="lock" />} />}
            mode="outlined"
            label="Password"
            secureTextEntry={hidePassword}
            right={
              <TextInput.Icon
                icon={() => <Icon name={hidePassword ? "eye" : "eye-off"} />}
                onPress={() => {
                  hidePassword ? setHidePassword(false) : setHidePassword(true);
                }}
              />
            }
            style={styles.input_field}
          />
          <TouchableOpacity style={styles.btn_sign}>
            <Text style={styles.login_2}>Sign in</Text>
          </TouchableOpacity>
          <View style={styles.login_com1}>
            <Text style={[styles.login_txt3]}>if you are new user ?</Text>
            <TouchableOpacity
              onPress={() => {
                router.navigate("/screen/Register");
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
  },
  login_img1: {
    width: 35,
    height: 35,
  },
  login_txt1: {
    fontSize: 15,
    color: "#a3a3a3",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  login_com1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%",
  },
  login_txt2: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2,
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
  login_1: {
    fontSize: 40,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  login_btn_back: {
    height: 40,
    width: "110%",
  },
  btn_login: {
    backgroundColor: "#8c11ff",
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
  login_header: {
    flex: 0.5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems:"center",
  },
  login_body: {
    flex: 0.5,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  btn_sign: {
    backgroundColor: "#116cff",
    borderRadius: 50,
    padding: "2%",
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input_field: {
    width: "100%",
  },
  sign_txt1: {
    fontSize: 15,
    color: "#a3a3a3",
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: "center",
  },
});

export default Login;
