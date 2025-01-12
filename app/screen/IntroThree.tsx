import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

import { NavigationProp } from "@react-navigation/native";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import { styles } from "@/css/main";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const IntroThree: React.FC<TestScreenProps> = ({ navigation }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const translateYValue = useSharedValue(-400);

  useEffect(() => {
    translateYValue.value = withSpring(0);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateYValue.value}],
  }));

  return (
    <View
      style={[styles.intro_container, { backgroundColor: theme.background }]}
    >
      <Animated.View style={[styles.intro_header, animatedStyle]}>
        <Image
          source={require("@/assets/images/3206467.jpg")}
          style={styles.img_intro}
        />
        <Text style={[styles.txt_1, { color: theme.text }]}>
          Make more friends 🕺
        </Text>
        <Text style={styles.txt_2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, fuga
          deleniti temporibus consequatur dolore excepturi illum! Veniam,
          exercitationem adipisci? Non rem, incidunt corrupti ullam aliquam
          nulla at aspernatur possimus deleniti.
        </Text>
      </Animated.View>
      <View style={styles.intro_body}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.btn_1}
        >
          <Text style={styles.txt_3}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.dot_view}>
          <View style={styles.dot2}></View>
          <View style={styles.dot2}></View>
          <View style={styles.dot1}></View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.btn_2}
        >
          <Text style={styles.txt_4}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   intro_container: {
//     flex: 1,
//     padding: "5%",
//     backgroundColor: "white",
//   },
//   intro_header: {
//     flex: 0.9,
//     justifyContent: "center",
//     alignItems: "center",
//     gap: width * 0.05,
//   },
//   intro_body: {
//     flex: 0.1,
//     justifyContent: "space-between",
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   img_intro: {
//     width: width * 0.7,
//     height: width * 0.7,
//     borderRadius: width * 1,
//   },
//   txt_1: {
//     fontSize: width * 0.07,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   txt_4: {
//     color: "white",
//     fontSize: width * 0.05,
//   },

//   btn_2: {
//     backgroundColor: "#2b80ff",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     width: width * 0.3,
//     borderRadius: width * 0.05,
//     padding: width * 0.02,
//   },
//   dot_view: {
//     display: "flex",
//     flexDirection: "row",
//     width: width * 0.07,
//     justifyContent: "space-between",
//   },
//   dot1: {
//     backgroundColor: "#1178ff",
//     width: width * 0.015,
//     height: width * 0.015,
//     borderRadius: width * 0.05,
//   },
//   dot2: {
//     backgroundColor: "#b5b5b5",
//     width: width * 0.015,
//     height: width * 0.015,
//     borderRadius: width * 0.05,
//   },
//   txt_2: {
//     textAlign: "center",
//     color: "#747474",
//     width: "80%",
//   },
//   txt_3: {
//     color: "#747474",
//     fontSize: width * 0.05,
//   },
//   btn_1: {
//     justifyContent: "center",
//     alignItems: "center",
//     width: width * 0.3,
//     borderRadius: width * 0.05,
//     padding: width * 0.02,
//   },
// });

export default IntroThree;
