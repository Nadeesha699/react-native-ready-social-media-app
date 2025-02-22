import { Dimensions, TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerActions, NavigationProp } from "@react-navigation/native";
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import { styles } from "@/css/main";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const { width } = Dimensions.get("window");

const Setting: React.FC<TestScreenProps> = ({ navigation }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <View style={styles.setting_view_1}>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        >
          <Icon name="menu" size={width * 0.06} color={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.setting_txt_1, { color: theme.text }]}>
          Setting
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DarkTheme");
        }}
        style={styles.setting_card_1}
      >
        <Icon name={"cellphone"} size={width * 0.08} color={theme.text} />
        <View style={styles.setting_view_2}>
          <Text style={[styles.setting_txt_1, { color: theme.text }]}>
            Display
          </Text>
          <Text style={styles.setting_txt_2}>Dark theme</Text>
        </View>
        <Icon name="chevron-right" size={width * 0.05} color={theme.text} />
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
