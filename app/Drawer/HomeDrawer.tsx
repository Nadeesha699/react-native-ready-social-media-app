import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNaviagte from "../Navigate/HomeNavigate";
import Setting from "@/app/screen/Setting";
import { TouchableOpacity, Text, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Login from "../screen/Login";
import RootStack from "../Stack/RootStack";
import SettingStack from "../Stack/SettingStack";
import { ThemeContext } from "../Theme/ThemeContext";
import { useContext } from "react";
import { darkTheme, lightTheme } from "../Theme/theme";

const Drawer = createDrawerNavigator();

const { width } = Dimensions.get("window");

const HomeDrawer = () => {
   const { isDarkMode } = useContext(ThemeContext);
    const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 0,
        },
        drawerInactiveTintColor:theme.text,
        drawerContentStyle:{backgroundColor:theme.background}
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeNaviagte}
        options={{
          headerShown: false,
          drawerIcon: ({ size, color }) => (
            <Icon name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingStack}
        options={{
          headerShown:false,
          drawerIcon: ({ color, size }) => (
            <Icon name="cog-outline" color={color} size={size} />
          ),
          // headerTitleStyle: { fontWeight: "bold" },
          // headerTitleAlign: "center",
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={HomeNaviagte}
        options={{
          headerShown: false,
          drawerIcon: ({ size, color }) => (
            <Icon name="logout" size={size} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          focus: () => {
            navigation.reset({
              index: 0,
              routes: [{ name: "Login" }],
            });
          },
        })}
      />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
