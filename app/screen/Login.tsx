import { StatusBars } from "@/components/components";
import { styles } from "@/css/main";
import { validateEmail, validatePassword, variables } from "@/scripts/scripts";
import { router } from "expo-router";
import { useEffect } from "react";
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
      <View style={styles.login_container}>
        <Animated.Image
          source={require("@/assets/images/6333040.jpg")}
          alt="icon"
          style={[styles.login_img,animated]}
        />
        <Animated.Text style={[styles.login_1,animated1]}>Login</Animated.Text>
        <Animated.View style={[styles.field_back,animated1]}>
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
        </Animated.View>
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
        <Animated.View style={[styles.field_back,animated1]}>
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
        </Text>
        <Animated.View style={[styles.login_btn_back,animated1]}>
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
        <Animated.Text style={[styles.login_txt1,animated1]}>OR</Animated.Text>
        <TouchableOpacity style={styles.login_com1}>
          <Animated.Image
            source={require("@/assets/images/google_2504914.png")}
            style={[styles.login_img1,animated1]}
          />
          <Animated.Text style={[styles.login_txt2,animated1]}>Login with google</Animated.Text>
        </TouchableOpacity>
        <Animated.View style={styles.login_com2}>
          <Animated.Text style={[styles.login_txt3,animated1]}>if you are new user ?</Animated.Text>
          <TouchableOpacity
            onPress={() => {
              router.navigate("/screen/Register");
            }}
          >
            <Animated.Text style={[styles.login_txt4,animated1]}>Register</Animated.Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </>
  );
};

export default Login;
