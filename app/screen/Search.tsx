import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
const { width, height } = Dimensions.get("window");

import { NavigationProp } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useContext, useState } from "react";
import { all } from "@/data/dumiData";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const data = [
  { name: "Nadeesha" },
  { name: "Ruwan" },
  { name: "Sadeepa" },
  { name: "Kalum" },
  { name: "Avinash" },
  { name: "Tharusha" },
  { name: "Sandamina" },
  { name: "Nisal" },
];

const Search: React.FC<TestScreenProps> = ({ navigation }) => {
  const [changeSearchIcon, setChangeTextIcon] = useState(false);
  const [text, setText] = useState("");

   const { isDarkMode } = useContext(ThemeContext);
      const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.search_container,{backgroundColor:theme.background}]}>
      <View style={styles.search_header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="chevron-left" size={width * 0.1} color={theme.text} />
        </TouchableOpacity>
        <TextInput
          style={{
            borderRadius: width * 0.1,
            borderTopRightRadius: width * 0.1,
            borderTopLeftRadius: width * 0.1,
            width: "80%",
          }}
          placeholder="Find by name, author, or type..."
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          mode="flat"
          value={text}
          onChangeText={(text) => {
            setText(text);
            if (text.length === 0) {
              setChangeTextIcon(false);
            } else {
              setChangeTextIcon(true);
            }
          }}
          right={
            <TextInput.Icon
              onPress={() => {
                setText("");
              }}
              icon={() => (
                <Icon
                  name={changeSearchIcon ? "close" : "magnify"}
                  size={width * 0.05}
                />
              )}
            />
          }
        />
      </View>
      <View style={styles.search_body}>
        {all
          .filter(
            (e) =>
              e.author.toLowerCase().includes(text.toLowerCase()) ||
              e.storyName.toLowerCase().includes(text.toLowerCase()) ||
              e.type.toLowerCase().includes(text.toLowerCase())
          )
          .map((e, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.home_con6}
                onPress={async () => {}}
              >
                <ImageBackground
                  source={e.imgs}
                  style={styles.home_img3}
                ></ImageBackground>
                <View style={styles.home_con10}>
                  <Text
                    style={[styles.home_txt_7,{color:theme.text}]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {e.storyName}
                  </Text>
                  <Text
                    style={styles.home_txt_8}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {e.author}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search_container: { flex: 1, backgroundColor: "white" },
  search_header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  profile_back_button: {
    width: width * 0.1,
    height: width * 0.1,
  },
  search_bar: {
    width: "80%",
  },
  search_body: {
    flex: 0.9,
    padding: width * 0.02,
    gap: width * 0.02,
    overflowY: "scroll",
  },
  home_con6: {
    display: "flex",
    flexDirection: "row",
    gap: "5%",
  },
  home_txt_8: {
    color: "#8e8e8e",
  },
  home_txt_7: {
    fontWeight: "bold",
  },
  home_con10: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  home_img3: {
    width: width * 0.15,
    height: width * 0.15,
    overflow: "hidden",
    borderRadius: width * 0.02,
  },
});

export default Search;
