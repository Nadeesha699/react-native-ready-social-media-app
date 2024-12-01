import { StatusBar } from "react-native";
import IntroOne from "./screen/IntroOne";
import { StatusBars } from "@/components/components";
import { Login } from "./screen/Login";
import { Register } from "./screen/Register";

const index = () => {

  return (
    <>
    <StatusBars/>
    <IntroOne/>
    </>
  );
};

export default index;
