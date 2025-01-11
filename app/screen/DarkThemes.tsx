import React, { useContext } from "react";
import { View, Text, Switch, StyleSheet, Dimensions } from "react-native";
import { ThemeContext } from "../Theme/ThemeContext";
import { lightTheme, darkTheme } from "../Theme/theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const { width, height } = Dimensions.get("window");

const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5%",
        }}
      >
        <Icon name={isDarkMode?"weather-night":"white-balance-sunny"} size={width * 0.07} color={theme.text} />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <Text style={{ color: theme.text,fontWeight:"bold" }}>{isDarkMode ?"Dark":"Light"} Mode</Text>
        </View>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
