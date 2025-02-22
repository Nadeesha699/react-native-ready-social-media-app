import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screen/Profile";
import UpdateProfile from "../screen/UpdateProfile";
import ReadScreen from "../screen/ReadScreen";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
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
