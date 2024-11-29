import { router } from "expo-router";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from "react-native";

export default function IntroThree() {
  return (
    <><StatusBar backgroundColor={"#2b80ff"} barStyle={"default"} /><View style={styles.inro_container}>
      <View style={styles.inro_container1}>
        <Image
          source={require("@/assets/images/2992830.jpg")}
          style={styles.img_intro} />
        <Text style={styles.txt_1}>Best Customer Service</Text>
        <Text style={styles.txt_2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, fuga
          deleniti temporibus consequatur dolore excepturi illum! Veniam,
          exercitationem adipisci? Non rem, incidunt corrupti ullam aliquam
          nulla at aspernatur possimus deleniti.
        </Text>
      </View>
      <View style={styles.inro_container2}>
        <TouchableOpacity onPress={() => { router.navigate('/screen/Home'); } } style={styles.btn_1}>
          <Text style={styles.txt_3}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { router.navigate('/screen/Home'); } } style={styles.btn_2}>
          <Text style={styles.txt_4}>Next</Text>
        </TouchableOpacity>
      </View>
    </View></>
  );
}

const styles = StyleSheet.create({
  inro_container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly"

  },
  inro_container1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap:10
  },
  inro_container2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  img_intro: {
    width: 250,
    height: 300,
  },
  txt_1: {
    fontSize:30,
    fontWeight:"bold",
    textAlign: "center",
  },
  txt_2: {
    textAlign: "center",
    paddingLeft:20,
    paddingRight:20,
    color:"#747474"
  },
  txt_3: {
    color:"#747474",
    fontSize:20,
    letterSpacing:2
  },
  txt_4: {
    color:"white",
    fontSize:20,
    letterSpacing:2,
  },
  btn_1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    borderRadius: 20,
    height:40
  },
  btn_2: {
    backgroundColor: "#2b80ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    borderRadius: 20,
    height:40
  },
});
