import { GoogleLogin, StatusBars } from "@/components/components";
import { styles } from "@/css/main";
import {
  validateContactNO,
  validateEmail,
  validatePassword,
  validateUserName,
  variables,
} from "@/scripts/scripts";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const Register = () => {

  const {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUserName,
    contactno,
    setContactNo,
    usernameShow,
    setUserNameShow,
    emailShow,
    setEmailShow,
    conatctnoShow,
    setContactNoShow,
    usernameSuccess,
    setUserNameSuccess,
    conatctnoSuccess,
    setContactNoSuccess,
    passwordShow,
    setPasswordShow,
    emailSuccess,
    setEmailSuccess,
    passwordSuccess,
    setPasswordSuccess,
    passwordEye,
    setPasswordEye,
  } = variables();

  const value1 = useSharedValue(-400)
  const value2 = useSharedValue(400)

  const animated = useAnimatedStyle(()=>{
    return {
      transform:[{translateX:value1.value}]
    }
  })

  const animated1 = useAnimatedStyle(()=>{
    return {
      transform:[{translateX:value2.value}]
    }
  })

  useEffect(()=>{
    value1.value = withSpring(0)
    value2.value = withSpring(0)
  },[])



  return (
    <>
      <StatusBars />
      <View style={styles.sign_container}>
        <Animated.Image
          source={require("@/assets/images/6333050.jpg")}
          alt="icon"
          style={[styles.login_img,animated]}
        />
        <Animated.ScrollView horizontal={false} showsVerticalScrollIndicator={false} style={animated1}>
          <View style={styles.reg_scroll}>
            <Text style={styles.sign_1}>Sign Up</Text>
            <GoogleLogin/>
            <Text style={styles.sign_txt1}>OR</Text>
            <View style={styles.field_back}>
              <Image
                source={require("@/assets/images/arroba.png")}
                style={styles.icon}
              />
              <TextInput
                placeholder="Email"
                style={styles.feildr_1}
                onChangeText={(e) => {
                  setEmail(e);
                  validateEmail(email)
                    ? setEmailShow(true)
                    : setEmailShow(false);
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
                style={styles.feildr_1}
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
            <View style={styles.field_back}>
              <Image
                source={require("@/assets/images/user.png")}
                style={styles.icon}
              />
              <TextInput
                placeholder="Full Name"
                style={styles.feildr_1}
                onChangeText={(e) => {
                  setUserName(e);
                  validateUserName(username)
                    ? setUserNameShow(true)
                    : setUserNameShow(false);
                  setUserNameSuccess(true);
                }}
              />
            </View>
            <Text
              style={[
                styles.error_message,
                {
                  display: usernameShow ? "flex" : "none",
                },
              ]}
            >
              Invalid name
            </Text>
            <View style={styles.field_back}>
              <Image
                source={require("@/assets/images/call.png")}
                style={styles.icon}
              />
              <TextInput
                placeholder="Contact Number"
                style={styles.feildr_1}
                onChangeText={(e) => {
                  setContactNo(e);
                  validateContactNO(contactno)
                    ? setContactNoShow(true)
                    : setContactNoShow(false);
                  setContactNoSuccess(true);
                }}
              />
            </View>
            <Text
              style={[
                styles.error_message,
                {
                  display: conatctnoShow ? "flex" : "none",
                },
              ]}
            >
              Invalid conatct number
            </Text>
            <TouchableOpacity
              onPress={() => {
                emailSuccess === true &&
                passwordSuccess === true &&
                conatctnoSuccess === true &&
                usernameSuccess === true
                  ? ToastAndroid.show("register success", 3000)
                  : ToastAndroid.show("register unsuccess", 3000);
              }}
              style={styles.btn_sign}
            >
              <Text style={styles.login_2}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.sign_com2}>
              <Text style={styles.login_txt3}>back to</Text>
              <TouchableOpacity
                onPress={() => {
                  router.back();
                }}
              >
                <Text style={[styles.login_txt4]}>login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.ScrollView>
      </View>
    </>
  );
};

export default Register;
