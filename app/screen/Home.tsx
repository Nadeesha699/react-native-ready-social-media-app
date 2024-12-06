import {
  HomeCategoryDataScroll,
  HomeCategoryScroll,
  HomeHeader,
  HomeHeaderScroll,
  StatusBars,
} from "@/components/components";
import { styles } from "@/css/main";
import React from "react";
import { View, Text } from "react-native";

function Home() {
  return (
    <>
      <StatusBars />
      <View style={styles.home_container}>
        <HomeHeader />
        <HomeHeaderScroll />
        <View style={styles.home_body}>
          <View style={styles.home_con3}>
            <Text style={styles.home_txt_5}>Categories</Text>
            <HomeCategoryScroll />
          </View>
          <HomeCategoryDataScroll />
        </View>
      </View>
    </>
  );
}

export default Home;
