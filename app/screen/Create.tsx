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
import { Button, Menu, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { launchImageLibrary } from "react-native-image-picker";
import { useContext, useState } from "react";
import React from "react";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import { styles } from "@/css/main";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const { width } = Dimensions.get("window");

const Create: React.FC<TestScreenProps> = ({ navigation }) => {
  // const Create = () => {
  const [selectCategory, setSelectCategory] = useState("");
  const [titile, setTittle] = useState("");
  const [story, setStory] = useState("");

  const [imageUri, setImageUri] = useState<string | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);

  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View
      style={[styles.create_container, { backgroundColor: theme.background }]}
    >
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Icon name={"close"} size={width * 0.06} color={"red"} />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", color: theme.text }}>
          Create Story
        </Text>
        <TouchableOpacity
          onPress={async () => {
            const resp = await axios.post(
              "http://localhost:4000/api/story/create",
              {
                Tittle: titile,
                Story: story,
                Image: base64Image,
                Category: selectCategory,
                AuthorId: 7,
              }
            );
            resp.data.success === true
              ? console.log("uploaded")
              : console.log("unuploaded");
          }}
        >
          <Text
            style={{
              color: "#1178ff",
              fontWeight: "bold",
              padding: width * 0.02,
            }}
          >
            upload
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        value={titile}
        onChangeText={(e) => {
          setTittle(e);
        }}
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
      <RNPickerSelect
        onValueChange={(e) => {
          setSelectCategory(e);
        }}
        items={[
          { label: "Horror", value: "Horror" },
          { label: "Fantasy", value: "Fantasy" },
          { label: "Romance", value: "Romance" },
          { label: "Mystery", value: "Mystery" },
          { label: "Comedy", value: "Comedy" },
          { label: "Sci-Fi", value: "Sci-Fi" },
          { label: "Thriller", value: "Thriller" },
        ]}
        placeholder={{}}
        style={pickerSelectStyles}
      />

      <TextInput
        value={story}
        onChangeText={(e) => {
          setStory(e);
        }}
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
          imageUri
            ? { uri: imageUri }
            : require("@/assets/images/placeholder.png")
        }
      >
        <TouchableOpacity
          style={styles.create_card_1}
          onPress={() => {

            launchImageLibrary({ mediaType: "photo" }, (response: any) => {
              if (response.assets) {
                setImageUri(response.assets[0].uri);
                // Convert image to base64
                const uri = response.assets[0].uri;
                fetch(uri)
                  .then((res) => res.blob())
                  .then((blob) => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setBase64Image((reader.result as string)?.split(",")[1]);
                    };
                    reader.readAsDataURL(blob);
                  });
              }
            });
          }}
        >
          {!imageUri ? (
            <>
              <Icon name={"upload"} size={width * 0.15} />
              <Text style={styles.home_txt_7}>Select the cover Image</Text>
            </>
          ) : (
            <TouchableOpacity
              onPress={() => {
                // setCoverImage(null);
                setImageUri(null);
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

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    color: "black",
  },
  inputAndroid: {
    fontSize: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    color: "black",
  },
};

export default Create;
