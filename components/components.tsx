import { router } from "expo-router";
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import { Text, Image } from "react-native";
import { styles } from "@/css/main"

export const P1 = () => {
  return (
    <Text style={styles.txt_2}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, fuga
      deleniti temporibus consequatur dolore excepturi illum! Veniam,
      exercitationem adipisci? Non rem, incidunt corrupti ullam aliquam nulla at
      aspernatur possimus deleniti.
    </Text>
  );
};

export const BtnSkip = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.navigate("/screen/Login");
      }}
      style={styles.btn_1}
    >
      <Text style={styles.txt_3}>Skip</Text>
    </TouchableOpacity>
  );
};

export const StatusBars = () => {
  return <StatusBar backgroundColor={"#2b80ff"} barStyle={"default"} />;
};

export const GoogleLogin = () => {
  return (
    <TouchableOpacity style={styles.login_com1}>
      <Image
        source={require("@/assets/images/google_2504914.png")}
        style={styles.login_img1}
      />
      <Text style={styles.login_txt2}>Login with google</Text>
    </TouchableOpacity>
  );
};

