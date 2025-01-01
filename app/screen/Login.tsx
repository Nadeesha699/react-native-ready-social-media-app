import { GoogleLogin, StatusBars } from "@/components/components";
import { styles } from "@/css/main";
import { loginfield } from "@/data/dumiData.jsx";
import { validateEmail, validatePassword } from "@/scripts/scripts";
import { router } from "expo-router";
import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailShow, setEmailShow] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [passwordEye, setPasswordEye] = useState(false);

  const value1 = useSharedValue(-400);
  const value2 = useSharedValue(400);

  const animated = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: value1.value }],
    };
  });

  const animated1 = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: value2.value }],
    };
  });

  useEffect(() => {
    value1.value = withSpring(0);
    value2.value = withSpring(0);
  }, []);

  return (
    <>
      <StatusBars />
      <View style={styles.login_container}>
        <Animated.Image
          source={require("@/assets/images/6333040.jpg")}
          alt="icon"
          style={[styles.login_img, animated]}
        />
        <Animated.Text style={[styles.login_1, animated1]}>Login</Animated.Text>
        {loginfield.map((e, index) => {
          return (
            <View key={index} style={{width:"110%"}}>
              <Animated.View style={[styles.field_back, animated1]}>
                <Image source={e.icon} style={styles.icon} />
                <TextInput
                  placeholder={e.placeHolder}
                  style={styles.feild_1}
                  value={e.placeHolder === "Email" ? email : password}
                  onChangeText={
                    e.placeHolder === "Email"
                      ? (e) => {
                          setEmail(e);
                          validateEmail(email)
                            ? setEmailShow(true)
                            : setEmailShow(false);
                          setEmailSuccess(true);
                        }
                      : (e) => {
                          setPassword(e);
                          validatePassword(password)
                            ? setPasswordShow(true)
                            : setPasswordShow(false);
                          setPasswordSuccess(true);
                        }
                  }
                  secureTextEntry={
                    e.placeHolder === "Email"
                      ? false
                      : passwordEye
                      ? false
                      : true
                  }
                />
                {e.placeHolder !== "Email" ? (
                  <TouchableOpacity
                    onPress={() => {
                      passwordEye
                        ? setPasswordEye(false)
                        : setPasswordEye(true);
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
                ) : (
                  <></>
                )}
              </Animated.View>
              <Text
                style={[
                  styles.error_message,
                  e.placeHolder === "Email"
                    ? {
                        display: emailShow ? "flex" : "none",
                      }
                    : { display: passwordShow ? "flex" : "none" },
                ]}
              >
                {e.errormessage}
              </Text>
            </View>
          );
        })}

        {/*that is normal concept tocreate text feild */}

        {/* <Animated.View style={[styles.field_back, animated1]}>
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
        </Animated.View> */}
        {/* <Text
          style={[
            styles.error_message,
            {
              display: emailShow ? "flex" : "none",
            },
          ]}
        >
          Invalid email
        </Text>
        <Animated.View style={[styles.field_back, animated1]}>
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
        </Animated.View>
        <Text
          style={[
            { display: passwordShow ? "flex" : "none" },
            styles.error_message,
          ]}
        >
          Invalid password
        </Text> */}

        <Animated.View style={[styles.login_btn_back, animated1]}>
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
        </Animated.View>
        <Animated.Text style={[styles.login_txt1, animated1]}>OR</Animated.Text>
        <Animated.View style={animated1}>
          <TouchableOpacity style={styles.login_com1}>
            <Image
              source={require("@/assets/images/google_2504914.png")}
              style={styles.login_img1}
            />
            <Text style={styles.login_txt2}>Login with google</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={styles.login_com2}>
          <Animated.Text style={[styles.login_txt3, animated1]}>
            if you are new user ?
          </Animated.Text>
          <TouchableOpacity
            onPress={() => {
              router.navigate("/screen/Register");
            }}
          >
            <Animated.Text style={[styles.login_txt4, animated1]}>
              Register
            </Animated.Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </>
  );
};

export default Login;
