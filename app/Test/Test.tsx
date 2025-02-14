import axios from "axios";
import { useEffect } from "react";
import { View } from "react-native";
import { commanApi } from "../components/components";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Test = () => {
  useEffect(() => {
    const loadData = async () => {
      try {
        const sid = await AsyncStorage.getItem("SId");
console.log(sid)
        const resp3 = await axios.get(
          `${commanApi}/story/get-all/by-id/${sid}`
        );
        console.log("Full Response:", resp3);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, []);

  return <View></View>;
};

export default Test;
