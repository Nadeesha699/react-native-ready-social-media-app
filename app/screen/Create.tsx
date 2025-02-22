import {
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  ToastAndroid,
  Alert,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import { useContext, useEffect, useState } from "react";
import React from "react";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import { styles } from "@/css/main";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";
import { ActivityIndicatorsSaving, commanApi } from "../components/components";
import AsyncStorage from "@react-native-async-storage/async-storage";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const { width } = Dimensions.get("window");

const Create: React.FC<TestScreenProps> = ({ navigation }) => {
  const [selectCategory, setSelectCategory] = useState("");
  const [titile, setTittle] = useState("");
  const [story, setStory] = useState("");
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [uid, setUid] = useState(0);
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const [waitingForSaving, setWaitingForSaving] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const id = await AsyncStorage.getItem("Id");
    setUid(parseInt(id ?? "0"));
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.status !== "granted") {
      Alert.alert(
        "Permission Required",
        "You need to grant access to your gallery."
      );
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      setBase64Image(result.assets[0].base64 ?? null);
    }
  };

  return (
    <View
      style={[styles.create_container, { backgroundColor: theme.background }]}
    >
      {waitingForSaving ? (
        <ActivityIndicatorsSaving />
      ) : (
        <>
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name={"close"} size={width * 0.06} color={"red"} />
            </TouchableOpacity>
            <Text style={{ fontWeight: "bold", color: theme.text }}>
              Create Story
            </Text>
            <TouchableOpacity
              onPress={async () => {
                try {
                  setWaitingForSaving(true);
                  if (titile && story && base64Image && selectCategory) {
                    const resp = await axios.post(`${commanApi}/story/create`, {
                      Tittle: titile,
                      Story: story,
                      Image: base64Image,
                      Category: selectCategory,
                      AuthorId: uid,
                    });

                    if (resp.data.success) {
                      ToastAndroid.show(
                        "Your story has been uploaded successfully!",
                        ToastAndroid.LONG
                      );
                    } else {
                      Alert.alert(
                        "Oops!",
                        "Something went wrong with the upload. Please try again."
                      );
                    }
                  } else {
                    Alert.alert(
                      "Incomplete Fields",
                      "Please make sure all fields are filled out correctly."
                    );
                  }
                  setWaitingForSaving(false);
                } catch (e) {
                  setWaitingForSaving(false);
                  console.error(e);
                  Alert.alert(
                    "Error",
                    "It seems we're having trouble connecting. Please try again later."
                  );
                }
              }}
            >
              <Text
                style={{
                  color: "#1178ff",
                  fontWeight: "bold",
                  padding: width * 0.02,
                }}
              >
                Upload
              </Text>
            </TouchableOpacity>
          </View>
          <TextInput
            value={titile}
            onChangeText={setTittle}
            left={
              <TextInput.Icon
                icon={({ size }) => <Icon name="format-title" size={size} />}
              />
            }
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            mode="flat"
            label="Title"
            style={styles.input_field1}
          />
          <RNPickerSelect
            onValueChange={setSelectCategory}
            items={[
              { label: "Horror", value: "Horror" },
              { label: "Fantasy", value: "Fantasy" },
              { label: "Romance", value: "Romance" },
              { label: "Mystery", value: "Mystery" },
              { label: "Comedy", value: "Comedy" },
              { label: "Sci-Fi", value: "Sci-Fi" },
              { label: "Thriller", value: "Thriller" },
            ]}
            placeholder={{ label: "Select a category...", value: "" }}
            style={pickerSelectStyles}
          />
          <TextInput
            value={story}
            onChangeText={setStory}
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
            label="Story"
            multiline
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
            <TouchableOpacity style={styles.create_card_1} onPress={pickImage}>
              {!imageUri ? (
                <>
                  <Icon name={"upload"} size={width * 0.15} />
                  <Text style={styles.home_txt_7}>Select the Cover Image</Text>
                </>
              ) : (
                <TouchableOpacity onPress={() => setImageUri(null)}>
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
        </>
      )}
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
