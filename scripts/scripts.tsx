import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export const q = useSharedValue(-400);

export const animatedStyle = useAnimatedStyle(() => {
  return {
    transform: [{ translateY: q.value }],
  };
});