import React from "react";
import { StatusBars } from "@/components/components";
import IntroOne from "./screen/IntroOne";
import Home from "./screen/Home";
import Profile from "./screen/Profile";
import UpdateProfile from "./screen/UpdateProfile";
import Register from "./screen/Register";
import Login from "./screen/Login";
import ReadScreen from "./screen/ReadScreen";

const Index = () => {
  return (
    <>
      <StatusBars />
      <ReadScreen/>
    </>
  );
};

export default Index;
