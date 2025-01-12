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

import { NavigationProp } from '@react-navigation/native';
import { darkTheme, lightTheme } from "../Theme/theme";
import { ThemeContext } from "../Theme/ThemeContext";
import { styles } from "@/css/main";

type TestScreenProps = {
  navigation: NavigationProp<any>; 
};

const IntroOne: React.FC<TestScreenProps> = ({navigation})=> {
    const { isDarkMode } = useContext(ThemeContext);
    const theme = isDarkMode ? darkTheme : lightTheme;
    
  const translateYValue = useSharedValue(-400);

  useEffect(() => {
    translateYValue.value = withSpring(0);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateYValue.value }],
  }));

  return (
    <View style={[styles.intro_container,{backgroundColor:theme.background}]}>
      <Animated.View style={[styles.intro_header, animatedStyle]}>
        <Image
          source={require("@/assets/images/4505748.jpg")}
          style={styles.img_intro}
        />
        <Text style={[styles.txt_1,{color:theme.text}]}>Make your own story 🪄</Text>
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
            navigation.navigate('Login');
          }}
          style={styles.btn_1}
        >
          <Text style={styles.txt_3}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.dot_view}>
          <View style={styles.dot1}/>
          <View style={styles.dot2}/>
          <View style={styles.dot2}/>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('IntroTwo')
          }}
          style={styles.btn_2}
        >
          <Text style={styles.txt_4}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
  
// });

export default IntroOne;
