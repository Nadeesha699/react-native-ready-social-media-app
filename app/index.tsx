import React from "react";
import { StatusBars } from "@/app/components/components";
import IntroOne from "./screen/IntroOne";
import IntroTwo from "./screen/IntroTwo";
import IntroThree from "./screen/IntroThree";
import Home from "./screen/Home";
import Profile from "./screen/Profile";
import UpdateProfile from "./screen/UpdateProfile";
import Register from "./screen/Register";
import Login from "./screen/Login";
import ReadScreen from "./screen/ReadScreen";
import Message from "./screen/UserMessage";
import Setting from "./screen/Setting";
import MyStack from "./Stack/RootStack";
import Search from "./screen/Search";
import RootStack from "./Stack/RootStack";
import HomeNaviagte from "./Navigate/HomeNavigate";
import HomeDrawer from "./Drawer/HomeDrawer";
import { ThemeContext, ThemeProvider } from "./Theme/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Test from "./screen/Test";
import AnimatedTest from "./Test/AnimatedTest";

const Index = () => {
  return (
    <>
      <ThemeProvider>
        <StatusBars />
        <RootStack />
      </ThemeProvider>
    </>
  );
};

export default Index;
