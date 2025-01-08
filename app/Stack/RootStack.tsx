import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReadScreen from "../screen/ReadScreen";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IntroOne from "../screen/IntroOne";
import IntroTwo from "../screen/IntroTwo";
import IntroThree from "../screen/IntroThree";
import Login from "../screen/Login";
import Register from "../screen/Register";
import UpdateProfile from "../screen/UpdateProfile";
import UserProfile from "../screen/OtherUserProfile";
import Search from "../screen/Search";
import  HomeDrawer  from "../Drawer/HomeDrawer";

const Stack = createNativeStackNavigator();

const { width } = Dimensions.get("window");

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{ animation: "slide_from_right", animationDuration: 3 }}
    >
      <Stack.Screen
        name="IntroOne"
        component={IntroOne}
        options={{ headerShown: false, animation: "none" }}
      />
      <Stack.Screen
        name="IntroTwo"
        component={IntroTwo}
        options={{ headerShown: false, animation: "none" }}
      />
      <Stack.Screen
        name="IntroThree"
        component={IntroThree}
        options={{ headerShown: false, animation: "none" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false, animation: "fade_from_bottom" }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false, animation: "fade_from_bottom" }}
      />
      <Stack.Screen
        name="Main"
        component={HomeDrawer}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="Story"
        component={ReadScreen}
        options={({ navigation }) => ({
          headerShown: true,
          animation: "slide_from_right",
          headerLeft: () => (
            <Icon
              name="chevron-left"
              size={width * 0.1}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={({ navigation }) => ({
          headerShown: true,
          animation: "slide_from_right",
          headerLeft: () => (
            <Icon
              name="chevron-left"
              size={width * 0.1}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={({ navigation }) => ({
          headerShown: true,
          animation: "slide_from_right",
          headerLeft: () => (
            <Icon
              name="chevron-left"
              size={width * 0.1}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ animation: "slide_from_right" ,headerShown: false, }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
