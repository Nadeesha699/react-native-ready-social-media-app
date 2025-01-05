import React from "react";
import { StatusBars } from "@/components/components";
import IntroOne from "./screen/IntroOne";
import IntroTwo from "./screen/IntroTwo";
import IntroThree from "./screen/IntroThree";
import Home from "./screen/Home";
import Profile from "./screen/Profile";
import UpdateProfile from "./screen/UpdateProfile";
import Register from "./screen/Register";
import Login from "./screen/Login";
import ReadScreen from "./screen/ReadScreen";
import Message from "./screen/Message";

const Index = () => {
  return (
    <>
      <StatusBars />
      <Message/>
    </>
  );
};

export default Index;
