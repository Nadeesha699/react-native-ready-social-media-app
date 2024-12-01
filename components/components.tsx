import { router } from "expo-router";
import { StatusBar, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import {styles} from '@/css/main'

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

export const StatusBars = ()=>{
  return(
    <StatusBar backgroundColor={"#2b80ff"} barStyle={"default"}/>
  )
}

// export const EmailIcon = '@/assets/images/arroba.png'
// export const PasswordIcon = '@/assets/images/lock.png'
// export const EyeCloseIcon = '@/assets/images/hidden.png'
// export const EyeIcon = '@/assets/images/eye.png'
// export const GoogeleIcon = '@/assets/images/google_2504914.png'
// export const CallIcon = '@/assets/images/call.png'
// export const UserIcon ='@/assets/images/user.png'
// export const Intro1Image = '@/assets/images/7426283.jpg'
// export const Intro2Image = '@/assets/images/4421883.jpg'
// export const Intro3Image = '@/assets/images/2992830.jpg'
// export const LoginImage = '@/assets/images/6333040.jpg'
// export const RegisterImage = '@/assets/images/6333050.jpg'
