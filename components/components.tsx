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

