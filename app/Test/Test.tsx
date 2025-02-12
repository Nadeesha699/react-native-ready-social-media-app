import axios from "axios";
import { useEffect } from "react";
import { View } from "react-native";
import { commanApi } from "../components/components";

const Test = () => {
  useEffect(() => {
    const loadData = async () => {
      const resp1 = await axios.get(`${commanApi}/story/get-all`);
      console.log(resp1.data.data.length);
      console.log(resp1.data.data);
      const resp2 = await axios.get(`${commanApi}/follower/following-count/7`)
      console.log(resp2.data.data)
      const resp3 = await axios.get(`${commanApi}/follower/follower-count/7`)
      console.log(resp3.data.data)
    };
    loadData();
  }, []);
  return <View></View>;
};

export default Test;
