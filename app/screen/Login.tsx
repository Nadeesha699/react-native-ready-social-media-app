import { StatusBars } from "@/components/components";
import { styles } from "@/css/main";
import { validateEmail, validatePassword, variables } from "@/scripts/scripts";
import { router } from "expo-router";
// import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from "react-native";

const Login = () => {
  
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailShow,
    setEmailShow,
    passwordShow,
    setPasswordShow,
    emailSuccess,
    setEmailSuccess,
    passwordSuccess,
    setPasswordSuccess,
    passwordEye,
    setPasswordEye,
  } = variables();

  return (
    <>
      <StatusBars />
      <View style={styles.login_container}>
        <Image
          source={require("@/assets/images/6333040.jpg")}
          alt="icon"
          style={styles.login_img}
        />
        <Text style={styles.login_1}>Login</Text>
        <View style={styles.field_back}>
          <Image
            source={require("@/assets/images/arroba.png")}
            style={styles.icon}
          />
          <TextInput
            placeholder="Email"
            style={styles.feild_1}
            value={email}
            onChangeText={(e) => {
              setEmail(e);
              validateEmail(email) ? setEmailShow(true) : setEmailShow(false);
              setEmailSuccess(true);
            }}
          />
        </View>
        <Text
          style={[
            styles.error_message,
            {
              display: emailShow ? "flex" : "none",
            },
          ]}
        >
          Invalid email
        </Text>
        <View style={styles.field_back}>
          <Image
            source={require("@/assets/images/lock.png")}
            style={styles.icon}
          />
          <TextInput
            placeholder="Password"
            style={styles.feild_1}
            value={password}
            onChangeText={(e) => {
              setPassword(e);
              validatePassword(password)
                ? setPasswordShow(true)
                : setPasswordShow(false);
              setPasswordSuccess(true);
            }}
            secureTextEntry={passwordEye ? false : true}
          />
          <TouchableOpacity
            onPress={() => {
              passwordEye ? setPasswordEye(false) : setPasswordEye(true);
            }}
          >
            <Image
              source={
                passwordEye
                  ? require("@/assets/images/eye.png")
                  : require("@/assets/images/hidden.png")
              }
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={[
            { display: passwordShow ? "flex" : "none" },
            styles.error_message,
          ]}
        >
          Invalid password
        </Text>
        <TouchableOpacity
          onPress={() => {
            if (emailSuccess === true && passwordSuccess === true) {
              ToastAndroid.show("logging success", 3000);
              router.navigate("/screen/Home");
            } else {
              ToastAndroid.show("logging unsuccess", 3000);
            }
          }}
          style={styles.btn_login}
        >
          <Text style={styles.login_2}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.login_txt1}>OR</Text>
        <TouchableOpacity style={styles.login_com1}>
          <Image
            source={require("@/assets/images/google_2504914.png")}
            style={styles.login_img1}
          />
          <Text style={styles.login_txt2}>Login with google</Text>
        </TouchableOpacity>
        <View style={styles.login_com2}>
          <Text style={styles.login_txt3}>if you are new user ?</Text>
          <TouchableOpacity
            onPress={() => {
              router.navigate("/screen/Register");
            }}
          >
            <Text style={[styles.login_txt4]}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;
