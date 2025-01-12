import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ToastAndroid,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import { useContext, useState } from "react";
import React from "react";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import { styles } from "@/css/main";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const { width } = Dimensions.get("window");

const Create: React.FC<TestScreenProps> = () => {
  const [covserImage, setCoverImage] = useState<string | null>(null);

  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View
      style={[styles.create_container, { backgroundColor: theme.background }]}
    >
      <TextInput
        left={
          <TextInput.Icon
            icon={({ size }) => <Icon name="format-title" size={size} />}
          />
        }
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        mode="flat"
        label="titile"
        style={styles.input_field1}
      />
      <TextInput
        left={
          <TextInput.Icon
            icon={({ size }) => (
              <Icon name="book-open-page-variant" size={size} />
            )}
          />
        }
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        mode="flat"
        label="story"
        multiline={true}
        numberOfLines={15}
        style={styles.input_field1}
      />
      <ImageBackground
        style={styles.create_img_1}
        source={
          covserImage
            ? { uri: covserImage }
            : require("@/assets/images/placeholder.png")
        }
      >
        <TouchableOpacity
          style={styles.create_card_1}
          onPress={async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
              quality: 1,
              allowsEditing: true,
              aspect: [6, 3],
            });
            if (!result.canceled) {
              setCoverImage(result.assets[0].uri);
            }
          }}
        >
          {!covserImage ? (
            <>
              <Icon name={"upload"} size={width * 0.15} />
              <Text style={styles.home_txt_7}>Select the cover Image</Text>
            </>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setCoverImage(null);
              }}
            >
              <Icon
                style={styles.create_img_2}
                name={"delete"}
                size={width * 0.1}
                color={"black"}
              />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Create;
