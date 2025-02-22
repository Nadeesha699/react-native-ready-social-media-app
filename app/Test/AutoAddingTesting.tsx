import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, ToastAndroid, Alert, ActivityIndicator, StyleSheet } from "react-native";
import { commanApi } from "../components/components";
import commentJson from "../Json/commentJson.json";
import { styles } from "@/css/main";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const AutoAddingTesying = () => {
  const [commentData, setCommentData] = useState(commentJson);
  const [commentTxt, setCommentTxt] = useState("");
  useEffect(() => {
    loadData();
  }, []);
 

  const loadData = async () => {
    const resp = await axios.get(`${commanApi}/comment/all/by-id/7`);
    setCommentData(resp.data.data);
  };
  return (
    <>
      {/* {commentData.map((e, index) => {
        return (
          <View key={index} style={styles.comment_card}>
            <View style={styles.comment_con}>
              <Text>{e.User.Name}</Text>
              <Text>{e.Comment}</Text>
            </View>
          </View>
        );
      })}
      <TextInput
        placeholder="Message"
        value={commentTxt}
        onChangeText={(e) => {
          setCommentTxt(e);
        }}
        right={
          <TextInput.Icon
            onPress={async () => {
              try {
                const resp = await axios.post(`${commanApi}/comment/create`, {
                  Comment: commentTxt,
                  SenderId: 17,
                  StoryId: 7,
                });

                if (resp.data.success) {
                  loadData();
                  ToastAndroid.show("Comment successfully posted!", 2000);
                } else {
                  ToastAndroid.show(
                    "Failed to post comment. Please try again.",
                    2000
                  );
                }

                setCommentTxt("");
              } catch (e) {
                console.log(e);
                Alert.alert(
                  "Something went wrong!",
                  "It seems we're having trouble connecting. Please try again later."
                );
              }
            }}
            icon={() => <Icon name="send" size={20} />}
          />
        }
      /> */}
    </>
  );
};

const styless = StyleSheet.create({
    lottie: {
      width: 100,
      height: 100
    }
  });

export default AutoAddingTesying;
