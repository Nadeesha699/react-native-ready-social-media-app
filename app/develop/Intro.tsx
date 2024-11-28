import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ImageBackground,
} from "react-native";

export const Intro = () => {
  return (
    <ImageBackground
      source={require("@/assets/images/background-gradient-lights.jpg")}
      resizeMode="cover"
      style={styles.intro_container}
    >
      <View>
        <Button onPress={() => {}} title="start" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    intro_container:{
        flex:1
    },
});
