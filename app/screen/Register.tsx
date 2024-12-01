import { StatusBars } from "@/components/components";
import { styles } from "@/css/main";
import { router } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
} from "react-native";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [contactno, setContactNo] = useState("");
  const [emailShow, setEmailShow] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [usernameShow, setUserNameShow] = useState(false);
  const [conatctnoShow, setContactNoShow] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [usernameSuccess, setUserNameSuccess] = useState(false);
  const [conatctnoSuccess, setContactNoSuccess] = useState(false);
  const [passwordEye, setPasswordEye] = useState(false);

  const validateEmail = () => {
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) 
      ? setEmailShow(true)
      : setEmailShow(false);
    setEmailSuccess(true);
  };

  const validatePassword = () => {
    !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)
      ? setPasswordShow(true)
      : setPasswordShow(false);
    setPasswordSuccess(true);
  };

  const validateUserName = () => {
    !/^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(username)
      ? setUserNameShow(true)
      : setUserNameShow(false);
    setUserNameSuccess(true);
  };

  const validateContactNO = () => {
    !/^\+?[0-9]{1,3}?[-. ]?(\(?\d{1,4}?\)?)[-. ]?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,9}$/.test(contactno)

      ? setContactNoShow(true)
      : setContactNoShow(false);
    setContactNoSuccess(true);
  };

  return (
    <>
      <StatusBars />
      <View style={styles.sign_container}>
        <Image
          source={require("@/assets/images/6333050.jpg")}
          alt="icon"
          style={styles.login_img}
        />
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
          <View style={styles.reg_scroll}>
            <Text style={styles.sign_1}>Sign Up</Text>
            <TouchableOpacity style={styles.sign_com1}>
              <Image
                source={require("@/assets/images/google_2504914.png")}
                style={styles.login_img1}
              />
              <Text style={styles.login_txt2}>Sign Up with google</Text>
            </TouchableOpacity>
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
                  validateEmail();
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
                  validatePassword();
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
                  validateUserName();
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
                  validateContactNO();
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
                  : ToastAndroid.show("register unsuccess",3000)
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
        </ScrollView>
      </View>
    </>
  );
};

export default Register;
