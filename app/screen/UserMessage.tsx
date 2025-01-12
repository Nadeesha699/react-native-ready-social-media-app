import { useContext, useEffect, useRef } from "react";
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
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import { styles } from "@/css/main";
  
  type TestScreenProps = {
    navigation: NavigationProp<any>;
  };

const UserMessages: React.FC<TestScreenProps> = ({navigation}) => {
  const scrollViewRef = useRef<ScrollView | null>(null);

  const { isDarkMode } = useContext(ThemeContext);
      const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, []);

  return (
    <View style={[styles.message_container,{backgroundColor:theme.background}]}>
      <View style={styles.message_header}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
          <Icon name="chevron-left" size={width * 0.1} color={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.header_name,{color:theme.text}]} numberOfLines={1} ellipsizeMode="tail">
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
                <Text style={styles.setting_txt_1}>{e.messsage}</Text>
                <Text style={styles.message_txt}>{e.time}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <TextInput
        style={[styles.message_footer,{backgroundColor:theme.background}]}
        placeholder="Message"
        right={
          <TextInput.Icon
            icon={() => <Icon name="send" size={width * 0.06} color={theme.text} />}
          />
        }
      />
    </View>
  );
};


export default UserMessages;
