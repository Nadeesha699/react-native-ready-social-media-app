import React from "react";
import { StatusBars } from "@/components/components";
import IntroOne from "./screen/IntroOne";
import Home from "./screen/Home";
import Profile from "./screen/Profile";
import UpdateProfile from "./screen/UpdateProfile"

const Index = () => {
  return (
    <>
      <StatusBars />
      <UpdateProfile/>
    </>
  );
};

export default Index;
