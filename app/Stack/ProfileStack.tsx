import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screen/Profile";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Dimensions, TouchableOpacity, Text } from "react-native";
import UpdateProfile from "../screen/UpdateProfile";
import ReadScreen from "../screen/ReadScreen";
import Notifications from "../screen/Notification";
import ChatList from "../screen/ChatList";
import UserMessages from "../screen/UserMessage";
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";
import { darkTheme, lightTheme } from "../Theme/theme";

const Stack = createNativeStackNavigator();

const { width } = Dimensions.get("window");

const ProfileStack = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profiles"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Update Profile"
        component={UpdateProfile}
        options={{headerShown:false
        }}
        // options={({ navigation }) => ({
        //   animation: "slide_from_right",
        //   headerTitleAlign: "center",
        //   headerTintColor:theme.text,
        //   headerStyle: { backgroundColor: theme.background },
        //   headerTitleStyle: { fontWeight: "bold" },
        //   headerLeft: () => (
        //     <Icon
        //       style={{ padding: width * 0.02 }}
        //       name="close"
        //       size={width * 0.05}
        //       color="#ff005d"
        //       onPress={() => navigation.goBack()}
        //     />
        //   ),
        //   headerRight: () => (
        //     <TouchableOpacity>
        //       <Text
        //         style={{
        //           color: "#1178ff",
        //           fontWeight: "bold",
        //           padding: width * 0.02,
        //         }}
        //       >
        //         edit
        //       </Text>
        //     </TouchableOpacity>
        //   ),
        // })}
      />
      <Stack.Screen
        name="Story"
        component={ReadScreen}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
