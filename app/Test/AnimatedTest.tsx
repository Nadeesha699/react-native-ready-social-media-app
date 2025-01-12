import { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const AnimatedTest = () => {
  const translateXValue = useSharedValue(-200);
  const translateXValue1 = useSharedValue(200);
  const translateXValue2 = useSharedValue(200);
  const translateXValue3 = useSharedValue(200);
  const translateXValue4 = useSharedValue(200);
  const translateXValue5 = useSharedValue(200);
  const translateXValue6 = useSharedValue(200);
  const translateXValue7 = useSharedValue(200);
  const translateXValue8 = useSharedValue(0);

  useEffect(() => {
    translateXValue.value = withSpring(0);
    translateXValue1.value = withSequence(
      withDelay(500, withSpring(50)),
      withRepeat(withTiming(-50, { duration: 1000 }), -1, true)
    );
    translateXValue2.value = withSpring(0, { damping: 10, stiffness: 100 });
    translateXValue3.value = withDecay({ velocity: 2, clamp: [0, 200] });
    translateXValue4.value = withDelay(500, withSpring(0));
    translateXValue5.value = withSequence(
      withTiming(100, { duration: 500 }),
      withSpring(0)
    );
    translateXValue6.value = withRepeat(
      withSpring(100), // Animation
      -1, // Infinite loops
      true // Reverse on each loop
    );
    translateXValue7.value = withSequence(
      withDelay(500, withSpring(50)),
      withRepeat(withTiming(-50, { duration: 1000 }), -1, true)
    );
    translateXValue8.value = withSpring(360); // Rotates 360 degrees
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateXValue.value }],
  }));

  const animatedStyle1 = useAnimatedStyle(() => ({
    transform: [{ translateY: translateXValue1.value }],
  }));

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ translateY: translateXValue2.value }],
  }));

  const animatedStyle3 = useAnimatedStyle(() => ({
    transform: [{ translateY: translateXValue3.value }],
  }));

  const animatedStyle4 = useAnimatedStyle(() => ({
    transform: [{ translateY: translateXValue4.value }],
  }));

  const animatedStyle5 = useAnimatedStyle(() => ({
    transform: [{ translateY: translateXValue5.value }],
  }));

  const animatedStyle6 = useAnimatedStyle(() => ({
    transform: [{ translateY: translateXValue6.value }],
  }));

  const animatedStyle7 = useAnimatedStyle(() => ({
    transform: [{ translateY: translateXValue6.value }],
  }));

  const animatedStyle8 = useAnimatedStyle(() => ({
    transform: [{ rotate: `${translateXValue8.value}deg` }],
  }));

  return (
    <View>
      <Animated.View
        style={[
          { backgroundColor: "yellow", width: 100, height: 100 },
          animatedStyle,
        ]}
      ></Animated.View>
      <Animated.View
        style={[
          { backgroundColor: "red", width: 100, height: 100 },
          animatedStyle1,
        ]}
      ></Animated.View>
      <Animated.View
        style={[
          { backgroundColor: "pink", width: 100, height: 100 },
          animatedStyle2,
        ]}
      ></Animated.View>
      <Animated.View
        style={[
          { backgroundColor: "blue", width: 100, height: 100 },
          animatedStyle3,
        ]}
      ></Animated.View>
      <Animated.View
        style={[
          { backgroundColor: "gray", width: 100, height: 100 },
          animatedStyle4,
        ]}
      ></Animated.View>
      <Animated.View
        style={[
          { backgroundColor: "orange", width: 100, height: 100 },
          animatedStyle5,
        ]}
      ></Animated.View>
      <Animated.View
        style={[
          { backgroundColor: "purple", width: 100, height: 100 },
          animatedStyle6,
        ]}
      ></Animated.View>
      <Animated.View
        style={[
          { backgroundColor: "lightgreen", width: 100, height: 100 },
          animatedStyle7,
        ]}
      ></Animated.View>
      <Animated.View
        style={[
          { backgroundColor: "lightblue", width: 100, height: 100 },
          animatedStyle8,
        ]}
      ></Animated.View>
    </View>
  );
};

export default AnimatedTest;
