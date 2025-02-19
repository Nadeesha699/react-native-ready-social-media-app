import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReadScreen from "../screen/ReadScreen";
import { Dimensions, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IntroOne from "../screen/IntroOne";
import IntroTwo from "../screen/IntroTwo";
import IntroThree from "../screen/IntroThree";
import Login from "../screen/Login";
import Register from "../screen/Register";
import UpdateProfile from "../screen/UpdateProfile";
import UserProfile from "../screen/UserProfile";
import Search from "../screen/Search";
import HomeDrawer from "../Drawer/HomeDrawer";
import UserMessages from "../screen/UserMessage";
import Profile from "../screen/Profile";
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";

const Stack = createNativeStackNavigator();

const { width } = Dimensions.get("window");

function OldComerRootStack() {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <Stack.Navigator
      screenOptions={{ animation: "slide_from_right", animationDuration: 3 }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false, animation:"flip" }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false, animation:"flip" }}
      />
      <Stack.Screen
        name="Main"
        component={HomeDrawer}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="Story"
        component={ReadScreen}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="User Profile"
        component={UserProfile}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="Update Profile"
        component={UpdateProfile}
        options={({ navigation }) => ({
          animation: "slide_from_right",
          headerTitleAlign: "center",
          headerTintColor: theme.text,
          headerStyle: { backgroundColor: theme.background },
          headerTitleStyle: { fontWeight: "bold" },
          headerLeft: () => (
            <Icon
              style={{ padding: width * 0.02 }}
              name="close"
              size={width * 0.05}
              color="#ff005d"
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Text
                style={{
                  color: "#1178ff",
                  fontWeight: "bold",
                  padding: width * 0.02,
                }}
              >
                edit
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Message"
        component={UserMessages}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false, animation: "simple_push" }}
      />
    </Stack.Navigator>
  );
}

export default OldComerRootStack;
