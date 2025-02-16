import axios from "axios";
import { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { commanApi } from "../components/components";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Test = () => {
  useEffect(() => {
    const loadData = async () => {
      try {
        const resp3 = await axios.get(
          `${commanApi}/follower/verify-follower/17/18`
        );
        resp3.data.data? console.log('following'):  console.log('follow')
        resp3.data.data.FriendStatus ? console.log('friend') : 1=== resp3.data.data.UserId ? console.log('following'):''
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, []);

  //no data found ------ follow
  //if founded >  friend status  false  ----- following(senderId)  followback(forid)
  //if founded >  friend status  true    ----- friend

  return (
    <View>
      <Text>user 1</Text>
      <TouchableOpacity
        onPress={async () => {
          const resp3 = await axios.post(`${commanApi}/follower/follow`, {
            FollowerId: 17,
            UserId: 18,
          });
        }}
      >
        <Text>Follow</Text>
      </TouchableOpacity>
      <Text>user 2</Text>
      <TouchableOpacity>
        <Text>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Test;
