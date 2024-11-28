import { View, Text } from "react-native";
import Home from "./screen/Home";
import IntroOne from "./screen/IntroOne";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <IntroOne/>
  );
};

export default index;
