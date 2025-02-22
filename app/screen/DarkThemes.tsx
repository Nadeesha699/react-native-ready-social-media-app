import React, { useContext } from "react";
import { View, Text, Switch, StyleSheet, Dimensions } from "react-native";
import { ThemeContext } from "../Theme/ThemeContext";
import { lightTheme, darkTheme } from "../Theme/theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "@/css/main";
const { width } = Dimensions.get("window");

const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={{flex: 1, backgroundColor: theme.background }}>
      <View
        style={styles.darktheme_view_1}
      >
        <Icon name={isDarkMode?"weather-night":"white-balance-sunny"} size={width * 0.07} color={theme.text} />
        <View
          style={styles.darktheme_view_2}
        >
          <Text style={[{ color: theme.text},styles.home_txt_7]}>{isDarkMode ?"Dark":"Light"} Mode</Text>
        </View>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

export default SettingsScreen;

