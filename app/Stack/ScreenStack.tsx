import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screen/Profile";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Dimensions } from "react-native";
import UpdateProfile from "../screen/UpdateProfile";
import ReadScreen from "../screen/ReadScreen";
import Notifications from "../screen/Notification";
import ChatList from "../screen/ChatList";
import UserMessages from "../screen/UserMessage";

const Stack = createNativeStackNavigator();

const { width } = Dimensions.get("window");

export const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="Update Profile"
        component={UpdateProfile}
        options={({ navigation }) => ({
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
        name="Story"
        component={ReadScreen}
        options={({ navigation }) => ({
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
    </Stack.Navigator>
  );
};

export const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={ChatList}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="UserMessage"
        component={UserMessages}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};


export const NotificationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notifiaction"
        component={Notifications}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};
