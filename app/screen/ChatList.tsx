import { useState } from "react";
import { Image, TouchableOpacity, View, Text, Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");

const chatData = [
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Nadeesha",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
  {
    name: "Ruwan",
    message: "Hello  tv v vbvtut uu vtubvutubtu",
    time: "12:30",
  },
];

import { NavigationProp } from "@react-navigation/native";
  
  type TestScreenProps = {
    navigation: NavigationProp<any>;
  };

const ChatList: React.FC<TestScreenProps>  = ({navigation}) => {
  const [searchIconChange, setSearchIconChange] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <View style={{ flex: 1, padding: width * 0.02, gap: width * 0.05,backgroundColor:"white" }}>
      <Text style={{ fontSize: width * 0.075, fontWeight: "bold" }}>Chat</Text>
      <TextInput
        value={searchText}
        style={{
          borderRadius: width * 0.1,
          borderTopRightRadius: width * 0.1,
          borderTopLeftRadius: width * 0.1,
        }}
        placeholder="Find by name..."
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        mode="flat"
        onChangeText={(text) => {
          setSearchText(text);
          if (text.length !== 0) {
            setSearchIconChange(true);
          } else {
            setSearchIconChange(false);
          }
        }}
        right={
          <TextInput.Icon
            onPress={() => {
              setSearchText("");
              setSearchIconChange(false);
            }}
            icon={() => (
              <Icon
                name={searchIconChange ? "close" : "magnify"}
                size={width * 0.05}
              ></Icon>
            )}
          ></TextInput.Icon>
        }
      ></TextInput>
      <View style={{ flexDirection: "column", flex: 1, overflowY: "scroll" }}>
        {chatData
          .filter((e) => e.name.toLowerCase().includes(searchText.toLowerCase()))
          .map((e) => {
            return (
              <TouchableOpacity
              onPress={()=>{navigation.navigate('UserMessage')}}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  padding: width * 0.02,
                }}
              >
                <Image
                  source={require("@/assets/images/40523.jpg")}
                  style={{
                    width: width * 0.15,
                    height: width * 0.15,
                    overflow: "hidden",
                    borderRadius: width * 0.1,
                  }}
                />
                <View
                  style={{
                    justifyContent: "space-around",
                    width: "60%",
                  }}
                >
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ fontWeight: "bold" }}
                  >
                    {e.name}
                  </Text>
                  <Text numberOfLines={1} ellipsizeMode="tail">
                    {e.message}
                  </Text>
                </View>
                <Text style={{ fontSize: width * 0.025, color: "#848484" }}>
                  {e.time}
                </Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

export default ChatList;
