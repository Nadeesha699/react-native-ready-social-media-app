import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
} from "react-native";
const { width, height } = Dimensions.get("window");

import { NavigationProp } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import { styles } from "@/css/main";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import storyJson from "../Json/storyJson.json";
import {
  ActivityIndicators,
  commanApi,
  NoDataPostView,
  ServerErrorView,
} from "../components/components";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const Search: React.FC<TestScreenProps> = ({ navigation }) => {
  // const Search = () => {
  const [changeSearchIcon, setChangeTextIcon] = useState(false);
  const [text, setText] = useState("");

  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [storyData, setStoryData] = useState(storyJson);
  const [waiting, setWaiting] = useState(true);
  const [noDataFound, setNoDataFound] = useState(false);
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const resp = await axios.get(`${commanApi}/story/get-all`);
        if (resp.data.data.length !== 0) {
          setStoryData(resp.data.data);
          setWaiting(false);
        } else {
          setNoDataFound(true);
          setWaiting(false);
        }
      } catch (e) {
        setServerError(true);
        setWaiting(false);
      }
    };
    loadData();
  }, []);

  return (
    <View
      style={[styles.search_container, { backgroundColor: theme.background }]}
    >
      <View style={styles.search_header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="chevron-left" size={width * 0.1} color={theme.text} />
        </TouchableOpacity>
        <TextInput
          style={[
            styles.search_txt,
            {
              width: "80%",
            },
          ]}
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
      {waiting ? (
        <ActivityIndicators />
      ) : noDataFound ? (
        <NoDataPostView />
      ) : serverError ? (
        <ServerErrorView />
      ) : (
        <View style={styles.search_body}>
          {storyData
            .filter(
              (e) =>
                e.User.Name.toLowerCase().includes(text.toLowerCase()) ||
                e.Tittle.toLowerCase().includes(text.toLowerCase()) ||
                e.Category.toLowerCase().includes(text.toLowerCase())
            )
            .map((e, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.home_con6}
                  onPress={async () => {
                    try {
                      await AsyncStorage.setItem("SId", e.Id.toString());
                      navigation.navigate("Story");
                    } catch (error) {
                      console.error("Error saving to AsyncStorage:", error);
                    }
                  }}
                >
                  <ImageBackground
                    source={{ uri: `data:image/jpeg;base64,${e.Image}` }}
                    style={styles.home_img3}
                  ></ImageBackground>
                  <View style={styles.home_con10}>
                    <Text
                      style={[styles.home_txt_7, { color: theme.text }]}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {e.Tittle}
                    </Text>
                    <Text
                      style={styles.home_txt_8}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {e.User.Name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
      )}
    </View>
  );
};

export default Search;
