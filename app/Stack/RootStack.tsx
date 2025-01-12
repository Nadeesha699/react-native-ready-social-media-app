import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReadScreen from "../screen/ReadScreen";
import { Dimensions} from "react-native";
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
import UserMessages from "../screen/UserMessage";

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
        options={{ 
          headerShown:false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="User Profile"
        component={UserProfile}
        options={{ 
          headerShown:false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="Message"
        component={UserMessages}
        options={{ 
          headerShown:false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false, animation:"simple_push" }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
