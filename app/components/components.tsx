import { router } from "expo-router";
import { useContext } from "react";
import { StatusBar, View } from "react-native";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";

export const StatusBars = () => {

  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  
  return (
    <StatusBar
      backgroundColor={theme.background}
      barStyle={isDarkMode ? "light-content" : "dark-content"}
    />
  );
};
