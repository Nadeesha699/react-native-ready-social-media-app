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
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: width * 0.02,
        backgroundColor: theme.background,
        gap: width * 0.05,
      }}
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
        style={styles.input_field}
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
        style={styles.input_field}
      />
      <ImageBackground
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: width * 0.5,
          borderRadius: width * 0.02,
          overflow: "hidden",
        }}

        source={covserImage ? {uri: covserImage} : require('@/assets/images/placeholder.png')} 
      >
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
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
              <Text style={{ fontWeight: "bold" }}>Select the cover Image</Text>
            </>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setCoverImage(null);
              }}
            >
              <Icon
                style={{ backgroundColor: "white", borderRadius: width * 0.02 }}
                name={"delete"}
                size={width * 0.1}
                color={"#880036"}
              />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  input_field: {
    borderRadius: width * 0.02,
    borderTopRightRadius: width * 0.02,
    borderTopLeftRadius: width * 0.02,
    width: "100%",
  },
});

export default Create;
