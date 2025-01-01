import { styles } from "@/css/main";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

export default function ReadScreen() {
  const [btnFollownig, setBtnFollownig] = useState(false);
  const [likeRed, setLikeRed] = useState(false);
  const [translateBtnText, setTranslateBtnText] = useState(
    "Translate to Sinhala"
  );

  const [fromLanguage, setFromLanguage] = useState("en-GB");
  const [toLanguage, setToLanguage] = useState("si-LK");

  const [authorName, setAuthorName] = useState<string | null>(null);
  const [storyName, setStoryName] = useState<string | null>(null);
  const [story, setStory] = useState<string | null>(null);
  const [storyImg, setStoryImg] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setAuthorName(await AsyncStorage.getItem("author_name"));
      setStoryName(await AsyncStorage.getItem("story_name"));
      const storedImg = await AsyncStorage.getItem("story_img");
      const storyImg = storedImg ? JSON.parse(storedImg) : null;
      setStoryImg(storyImg);
      setStory(await AsyncStorage.getItem("story"));
    };

    loadData();
  }, []);

  const TranslateText = () => {
    const apiUrl = `https://api.mymemory.translated.net/get?q=
  ${story}&langpair=${fromLanguage}|${toLanguage}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setStory(data.responseData.translatedText);
      });

    fromLanguage === "en-GB"
      ? setFromLanguage("si-LK")
      : setFromLanguage("en-GB");
    toLanguage === "si-LK" ? setToLanguage("en-GB") : setToLanguage("si-LK");
  };

  return (
    <>
      <StatusBar />
      <View>
        <View style={styles.readscreen_con1}>
          <ImageBackground
            source={
              storyImg
                ? storyImg
                : require("@/assets/images/3d-fantasy-scene.jpg")
            }
            style={styles.readscreen_img1}
          >
            <View style={styles.readscreen_con2}>
              <View style={styles.readscreen_con4}>
                <TouchableOpacity
                  onPress={() => {
                    likeRed ? setLikeRed(false) : setLikeRed(true);
                  }}
                >
                  <Image
                    source={
                      likeRed
                        ? require("@/assets/images/like2.png")
                        : require("@/assets/images/like1.png")
                    }
                    style={styles.readscreen_img2}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require("@/assets/images/comment1.png")}
                    style={styles.readscreen_img2}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    TranslateText();
                    translateBtnText === "Translate to Sinhala"
                      ? setTranslateBtnText("Translate To English")
                      : setTranslateBtnText("Translate to Sinhala");
                  }}
                  style={styles.readscreen_con5}
                >
                  <Text style={{ fontWeight: "bold" }}>{translateBtnText}</Text>
                  <Image
                    source={
                      fromLanguage === "en-GB"
                        ? require("@/assets/images/sri-lanka.png")
                        : require("@/assets/images/united-kingdom.png")
                    }
                    style={styles.readscreen_img2}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.readscreen_con3}>
            <View style={{ width: "70%" }}>
              <Text style={styles.readscreen_txt1}>{storyName}</Text>
              <Text style={styles.readscreen_txt4}>{authorName}</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.readscreen_btn1,
                {
                  borderWidth: btnFollownig ? 0 : 2,
                  backgroundColor: btnFollownig ? "#fe165c" : "transparent",
                },
              ]}
              onPress={() => {
                btnFollownig ? setBtnFollownig(false) : setBtnFollownig(true);
              }}
            >
              <Text
                style={[
                  styles.readscreen_txt2,
                  { color: btnFollownig ? "white" : "black" },
                ]}
              >
                {btnFollownig ? "following" : "follow"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.readscreen_txt3}>{story}</Text>
          <Text>
            
          </Text>
        </ScrollView>
      </View>
    </>
  );
}
