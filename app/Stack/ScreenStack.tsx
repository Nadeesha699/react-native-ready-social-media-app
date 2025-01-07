import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screen/Profile";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Dimensions } from "react-native";
import UpdateProfile from "../screen/UpdateProfile";
import ReadScreen from "../screen/ReadScreen";
import Search from "../screen/Search";
import Notifications from "../screen/Notification";
import Upload from "../screen/Upload";

const Stack = createNativeStackNavigator();

const { width, height } = Dimensions.get("window");

export const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
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
        name="UpdateProfile"
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
        name="ReadScreen"
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

export const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
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

export const UploadStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Upload"
        component={Upload}
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

export const NotificationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notifiaction"
        component={Notifications}
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
