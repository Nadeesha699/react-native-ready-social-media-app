import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNaviagte from "../Navigate/HomeNavigate";
import Setting from "@/app/screen/Setting";
import { TouchableOpacity, Text, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Drawer = createDrawerNavigator();

const { width } = Dimensions.get("window");

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 0,
        },
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
        component={Setting}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="cog-outline" color={color} size={size} />
          ),
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
