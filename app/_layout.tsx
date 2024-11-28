import {
  NavigationContainer,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./develop/Home";

export default function RootLayout() {




  return (
    <>
    <Home/>
    </>
  );
}
