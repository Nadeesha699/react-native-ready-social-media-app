import { StatusBar } from "react-native";
import IntroOne from "./screen/IntroOne";

const index = () => {

  return (
    <>
    <StatusBar backgroundColor={"#2b80ff"} barStyle={"default"}/>
      <IntroOne />
    </>
  );
};

export default index;
