import { Dimensions, TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("window");

import { DrawerActions, NavigationProp } from "@react-navigation/native";
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const Setting: React.FC<TestScreenProps> = ({ navigation }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <View style={{ flex: 1, backgroundColor:theme.background }}>
      <View
        style={{
          flexDirection: "row",
          width: "60%",
          justifyContent: "space-between",
          padding: "5%",
          
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        >
          <Icon name="menu" size={width * 0.06} color={theme.text}/>
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", color:theme.text}}>Setting</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DarkTheme");
        }}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5%",
        }}
      >
        <Icon name={"cellphone"} size={width * 0.08} color={theme.text}/>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <Text style={{ fontWeight: "bold",color:theme.text }}>Display</Text>
          <Text style={{ color: "#8e8e8e", fontSize: width * 0.03 }}>
            Dark theme
          </Text>
        </View>
        <Icon name="chevron-right" size={width * 0.05} color={theme.text} />
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
