import { router } from "expo-router";
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import { Text, Image } from "react-native";
import { styles } from "@/css/main";
import { variables } from "@/scripts/scripts";

const {
  all,
  horror,
  fantasy,
  thriller,
  categories,
  data,
  setData,
  hideYesdata,
  setHideYesdata,
} = variables();

export const P1 = () => {
  return (
    <Text style={styles.txt_2}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, fuga
      deleniti temporibus consequatur dolore excepturi illum! Veniam,
      exercitationem adipisci? Non rem, incidunt corrupti ullam aliquam nulla at
      aspernatur possimus deleniti.
    </Text>
  );
};

export const BtnSkip = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.navigate("/screen/Login");
      }}
      style={styles.btn_1}
    >
      <Text style={styles.txt_3}>Skip</Text>
    </TouchableOpacity>
  );
};

export const StatusBars = () => {
  return <StatusBar backgroundColor={"#2b80ff"} barStyle={"default"} />;
};

export const GoogleLogin = () => {
  return (
    <TouchableOpacity style={styles.login_com1}>
      <Image
        source={require("@/assets/images/google_2504914.png")}
        style={styles.login_img1}
      />
      <Text style={styles.login_txt2}>Login with google</Text>
    </TouchableOpacity>
  );
};

export const HomeHeader = () => {
  return (
    <View style={styles.home_header}>
      <TouchableOpacity>
        <Image
          source={require("@/assets/images/menu.png")}
          style={styles.home_img1}
        />
      </TouchableOpacity>
      <View style={styles.home_con1}>
        <Text style={styles.home_txt_1}>Hello,</Text>
        <Text style={styles.home_txt_2}>Nadeesha Ruwandima</Text>
      </View>
    </View>
  );
};

export const HomeHeaderScroll = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.home_scroll_sub_view}>
        {all.map((e, index) => {
          return (
            <TouchableOpacity key={index}>
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
  );
};

export const HomeCategoryScroll = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
  );
};

export const HomeCategoryDataScroll = () => {
  return (
    <ScrollView
      horizontal={false}
      style={{ display: hideYesdata ? "flex" : "none" }}
    >
      <View style={styles.home_con5}>
        {data.map((e, index) => {
          return (
            <TouchableOpacity key={index} style={styles.home_con6}>
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
                <HomeLikeCommentView />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export const HomeLikeCommentView = () => {
  return (
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
  );
};
