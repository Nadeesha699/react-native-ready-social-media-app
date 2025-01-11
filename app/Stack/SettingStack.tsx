import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Setting from "../screen/Setting";
import DarkThemes from "../screen/DarkThemes";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Dimensions } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";

const Stack = createNativeStackNavigator();

const { width, height } = Dimensions.get("window");

const SettingStack = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Setting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DarkTheme"
        component={DarkThemes}
        options={({ navigation }) => ({
          headerTintColor: theme.text,
          headerStyle: { backgroundColor: theme.background },
          headerLeft: () => (
            <Icon
              name="chevron-left"
              size={width * 0.1}
              color={theme.text}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
