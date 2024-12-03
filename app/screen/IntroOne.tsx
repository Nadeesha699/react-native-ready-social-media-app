import { BtnSkip, P1 } from "@/components/components";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { styles } from "@/css/main";

export default function IntroOne() {
  const q = useSharedValue(-400);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: q.value }],
    };
  });

  useEffect(() => {
    q.value = withSpring(0);
  }, []);

  return (
    <View style={styles.inro_container}>
      <Animated.View style={[styles.inro_container1, animatedStyle]}>
        <Image
          source={require("@/assets/images/4505748.jpg")}
          style={styles.img_intro}
        />
        <Animated.Text style={styles.txt_1}>Make own story 🪄</Animated.Text>
        <P1 />
      </Animated.View>
      <View style={styles.inro_container2}>
        <BtnSkip />
        <View style={styles.dot_view}>
          <View style={styles.dot1}></View>
          <View style={styles.dot2}></View>
          <View style={styles.dot2}></View>
        </View>
        <TouchableOpacity
          onPress={() => {
            router.navigate("/screen/IntroTwo");
          }}
          style={styles.btn_2}
        >
          <Text style={styles.txt_4}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
