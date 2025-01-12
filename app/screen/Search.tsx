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
import { styles } from "@/css/main";

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
          style={[styles.search_txt,{
            width: "80%",
          }]}
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


export default Search;
