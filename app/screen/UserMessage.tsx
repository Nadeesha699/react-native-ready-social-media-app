import { useEffect, useRef } from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("window");

const messageData = [
  { messsage: "Hello Patiyo", time: "20:27", cid: 1 },
  { messsage: "ow menika", time: "20:30", cid: 2 },
  { messsage: "Oya Mata Adareida", time: "20:31", cid: 1 },
  { messsage: "Ne raththrane", time: "20:45", cid: 2 },
  { messsage: "api thama yaluwa withari", time: "20:45", cid: 2 },
  { messsage: "Hmm", time: "20:55", cid: 1 },
  { messsage: "ai mokoda awulen wage", time: "21:05", cid: 2 },
  { messsage: "ne ne halo", time: "21:07", cid: 1 },
  { messsage: "duka hithunath mama kiwwe aththa", time: "21.:10", cid: 2 },
  { messsage: "Hmm", time: "21.15", cid: 1 },
  { messsage: "Oya Mata Adareida", time: "20:31", cid: 1 },
  { messsage: "Ne raththrane", time: "20:45", cid: 2 },
  { messsage: "api thama yaluwa withari", time: "20:45", cid: 2 },
  { messsage: "Hmm", time: "20:55", cid: 1 },
  { messsage: "ai mokoda awulen wage", time: "21:05", cid: 2 },
  { messsage: "ne ne halo", time: "21:07", cid: 1 },
  { messsage: "duka hithunath mama kiwwe aththa", time: "21.:10", cid: 2 },
  { messsage: "Hmm", time: "21.15", cid: 1 },
  { messsage: "Oya Mata Adareida", time: "20:31", cid: 1 },
  { messsage: "Ne raththrane", time: "20:45", cid: 2 },
  { messsage: "api thama yaluwa withari", time: "20:45", cid: 2 },
  { messsage: "Hmm", time: "20:55", cid: 1 },
  { messsage: "ai mokoda awulen wage", time: "21:05", cid: 2 },
  { messsage: "ne ne halo", time: "21:07", cid: 1 },
  { messsage: "duka hithunath mama kiwwe aththa", time: "21.:10", cid: 2 },
  { messsage: "Hmm", time: "21.15", cid: 1 },

  
];

import { NavigationProp } from "@react-navigation/native";
  
  type TestScreenProps = {
    navigation: NavigationProp<any>;
  };

const UserMessages: React.FC<TestScreenProps> = ({navigation}) => {
  const scrollViewRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, []);

  return (
    <View style={styles.message_container}>
      <View style={styles.message_header}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
          <ImageBackground
            source={require("@/assets/images/back.png")}
            style={styles.profile_back_button}
          />
        </TouchableOpacity>
        <Text style={styles.header_name} numberOfLines={1} ellipsizeMode="tail">
          Nadeesha Rwuandima
        </Text>
      </View>
      <ScrollView style={styles.message_body} ref={scrollViewRef}>
        {messageData.map((e, index) => {
          return (
            <View
              key={index}
              style={[
                styles.message_body_1,
                { alignItems: e.cid === 1 ? "flex-end" : "flex-start" },
              ]}
            >
              <View
                style={[
                  styles.message_card,
                  {
                    backgroundColor: e.cid === 1 ? "#d7d7d7" : "#b9d7ff",
                    borderTopLeftRadius: e.cid === 1 ? width * 0.02 : 0,
                    borderTopRightRadius: e.cid === 1 ? 0 : width * 0.02,
                    marginLeft: e.cid === 1 ? width * 0.02 : 0,
                    marginRight: e.cid === 1 ? 0 : width * 0.02,
                  },
                ]}
              >
                <Text style={{ fontWeight: "bold" }}>{e.messsage}</Text>
                <Text style={styles.message_txt}>{e.time}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <TextInput
        style={styles.message_footer}
        placeholder="Message"
        left={
          <TextInput.Icon
            icon={() => <Icon name="attachment" size={width * 0.06} />}
          />
        }
        right={
          <TextInput.Icon
            icon={() => <Icon name="send" size={width * 0.06} />}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  message_container: {
    flex: 1,
  },
  message_txt: { textAlign: "right", fontSize: width * 0.025, color: "gray" },
  message_header: {
    flex: 0.05,
    padding: width * 0.03,
    alignItems: "center",
    flexDirection: "row",
    gap: width * 0.02,
  },
  message_body: {
    flex: 0.8,
    overflowY: "scroll",
    padding: "2%",
  },
  message_body_1: {
    marginBottom: width * 0.02,
  },
  message_footer: {
    backgroundColor:"white"
  },
  profile_back_button: {
    width: width * 0.05,
    height: width * 0.05,
  },
  header_name: {
    fontWeight: "bold",
    fontSize: width * 0.05,
  },
  message_card: {
    borderBottomRightRadius: width * 0.02,
    borderBottomLeftRadius: width * 0.02,
    padding: width * 0.02,
  },
});

export default UserMessages;
