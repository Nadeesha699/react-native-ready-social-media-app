import { StatusBars } from "@/components/components";
import { styles } from "@/css/main";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import {
  all,
  horror,
  fantasy,
  thriller,
  categories,
} from "@/data/dumiData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";


function Home() {
  const [data, setData] = useState(all);
  const [hideYesdata, setHideYesdata] = useState(true);

  const a = "@/assets/images/menu.png"

  return (
    <>
      <StatusBars />
      <View style={styles.home_container}>
        <View style={styles.home_header}>
          <TouchableOpacity>
            <Image
              source={require(a)}
              style={styles.home_img1}
            />
          </TouchableOpacity>
          <View style={styles.home_con1}>
            <Text style={styles.home_txt_1}>Hello,</Text>
            <Text style={styles.home_txt_2}>Nadeesha Ruwandima</Text>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.home_scroll_sub_view}>
            {all.map((e, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={async () => {
                    try {
                      await AsyncStorage.setItem("author_name", e.author);
                      await AsyncStorage.setItem("story_name", e.storyName);
                      await AsyncStorage.setItem("story", e.story);
                      await AsyncStorage.setItem("story_img", JSON.stringify(e.imgs));
                      router.push("/screen/ReadScreen");
                    } catch (error) {
                      console.error("Error saving to AsyncStorage:", error);
                    }
                  }}
                >
                  <View style={styles.home_con2}>
                    <ImageBackground source={e.imgs} style={styles.home_img2}>
                      <Text style={styles.home_txt_3}>{e.storyName}</Text>
                      <Text style={styles.home_txt_4}>{e.author}</Text>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.home_body}>
          <View style={styles.home_con3}>
            <Text style={styles.home_txt_5}>Categories</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.home_con4}>
                <TouchableOpacity
                  style={styles.home_btn_category}
                  onPress={() => {
                    setData(all);
                    setHideYesdata(true);
                  }}
                >
                  <Text style={styles.home_txt_6}>ALL</Text>
                </TouchableOpacity>
                {categories.map((e, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.home_btn_category}
                      onPress={() => {
                        if (e.name === "Horror") {
                          setHideYesdata(true);
                          setData(horror);
                        } else if (e.name === "Thriller") {
                          setHideYesdata(true);
                          setData(thriller);
                        } else if (e.name === "Fantasy") {
                          setHideYesdata(true);
                          setData(fantasy);
                        } else {
                          setHideYesdata(false);
                        }
                      }}
                    >
                      <Text style={styles.home_txt_6}>{e.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <ScrollView
            horizontal={false}
            style={{ display: hideYesdata ? "flex" : "none" }}
          >
            <View style={styles.home_con5}>
              {data.map((e, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.home_con6}
                    onPress={async () => {
                      try {
                        await AsyncStorage.setItem("author_name", e.author);
                        await AsyncStorage.setItem("story_name", e.storyName);
                        await AsyncStorage.setItem("story", e.story);
                        await AsyncStorage.setItem("story_img", JSON.stringify(e.imgs));
                        router.push("/screen/ReadScreen");
                      } catch (error) {
                        console.error("Error saving to AsyncStorage:", error);
                      }
                    }}
                    
                  >
                    <View style={styles.home_con7}>
                      <ImageBackground
                        source={e.imgs}
                        style={styles.home_img3}
                      ></ImageBackground>
                    </View>
                    <View>
                      <View>
                        <Text style={styles.home_txt_7}>{e.storyName}</Text>
                        <Text style={styles.home_txt_8}>{e.author}</Text>
                      </View>
                      <View style={styles.home_con8}>
                        <View style={styles.home_con9}>
                          <ImageBackground
                            source={require("@/assets/images/like.png")}
                            style={styles.home_img4}
                          />
                          <Text>1k</Text>
                        </View>
                        <View style={styles.home_con9}>
                          <ImageBackground
                            source={require("@/assets/images/comment.png")}
                            style={styles.home_img4}
                          />
                          <Text>14</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

export default Home;
