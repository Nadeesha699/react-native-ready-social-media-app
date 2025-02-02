import { router } from "expo-router";
import { useContext } from "react";
import { StatusBar, View } from "react-native";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";
import axios from "axios";

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

export const loadAuthor = async (id: any) => {
const authorData =  await axios.get(`${commanApi}/user/get-all/${id}`)
  return authorData.data.data.Name
};

export const commanApi = 'http://localhost:4000/api'
//http://192.168.1.82:4000
