import { StatusBars } from "@/components/components";
import { styles } from "@/css/main";
import { router } from "expo-router";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export const Login = () => {
  return (
    <><StatusBars /><View style={styles.login_container}>
      <Image
        source={require("@/assets/images/6333040.jpg")}
        alt="icon"
        style={styles.login_img} />
      <Text style={styles.login_1}>Login</Text>
      <View style={styles.field_back}>
        <Image
          source={require("@/assets/images/arroba.png")}
          style={styles.icon} />
        <TextInput placeholder="Email" style={styles.feild_1} />
      </View>
      <View style={styles.field_back}>
        <Image
          source={require("@/assets/images/lock.png")}
          style={styles.icon} />
        <TextInput placeholder="Password" style={styles.feild_1} />
      </View>
      <TouchableOpacity onPress={() => { } } style={styles.btn_login}>
        <Text style={styles.login_2}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.login_txt1}>OR</Text>
      <TouchableOpacity style={styles.login_com1}>
        <Image
          source={require("@/assets/images/google_2504914.png")}
          style={styles.login_img1} />
        <Text style={styles.login_txt2}>Login with google</Text>
      </TouchableOpacity>
      <View style={styles.login_com2}>
        <Text style={styles.login_txt3}>if you are new user ?</Text>
        <TouchableOpacity onPress={() => { router.navigate('/screen/Register'); } }>
          <Text style={[styles.login_txt4]}>Register</Text>
        </TouchableOpacity>
      </View>
    </View></>
  );
};

