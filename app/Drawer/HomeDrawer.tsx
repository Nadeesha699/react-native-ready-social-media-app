import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNaviagte from "../Navigate/HomeNavigate";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SettingStack from "../Stack/SettingStack";
import { ThemeContext } from "../Theme/ThemeContext";
import { useContext } from "react";
import { darkTheme, lightTheme } from "../Theme/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();

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
          focus: async () => {
            await AsyncStorage.removeItem('logged'); 
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
