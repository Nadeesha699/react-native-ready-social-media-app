import { StatusBars } from "@/components/components";
import { styles } from "@/css/main";
import { router } from "expo-router";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

const Register = () => {
  return (
    <><StatusBars /><View style={styles.sign_container}>
      <Image
        source={require("@/assets/images/6333050.jpg")}
        alt="icon"
        style={styles.login_img} />
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <View style={styles.reg_scroll}>
          <Text style={styles.sign_1}>Sign Up</Text>
          <TouchableOpacity style={styles.sign_com1}>
            <Image
              source={require("@/assets/images/google_2504914.png")}
              style={styles.login_img1} />
            <Text style={styles.login_txt2}>Sign Up with google</Text>
          </TouchableOpacity>
          <Text style={styles.sign_txt1}>OR</Text>
          <View style={styles.field_back}>
            <Image
              source={require("@/assets/images/arroba.png")}
              style={styles.icon} />
            <TextInput placeholder="Email" style={styles.feildr_1} />
          </View>
          <View style={styles.field_back}>
            <Image
              source={require("@/assets/images/lock.png")}
              style={styles.icon} />
            <TextInput placeholder="Password" style={styles.feildr_1} />
          </View>
          <View style={styles.field_back}>
            <Image
              source={require("@/assets/images/user.png")}
              style={styles.icon} />
            <TextInput placeholder="Full Name" style={styles.feildr_1} />
          </View>
          <View style={styles.field_back}>
            <Image
              source={require("@/assets/images/call.png")}
              style={styles.icon} />
            <TextInput placeholder="Contact Number" style={styles.feildr_1} />
          </View>
          <TouchableOpacity onPress={() => { } } style={styles.btn_sign}>
            <Text style={styles.login_2}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.sign_com2}>
            <Text style={styles.login_txt3}>back to</Text>
            <TouchableOpacity onPress={() => { router.back(); } }>
              <Text style={[styles.login_txt4]}>login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View></>
  );
};

export default Register
