import { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const Test = () => {
  const translateXValue = useSharedValue(-400);

  useEffect(() => {
    translateXValue.value = withSpring(0);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateXValue.value }],
  }));
  return (
    <Animated.View style={[{ width: 100, height: 100, backgroundColor: "red"},animatedStyle]}></Animated.View>
  );
};

export default Test;
