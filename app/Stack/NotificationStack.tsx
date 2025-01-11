import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dimensions } from "react-native";
import Notifications from "../screen/Notification";

const Stack = createNativeStackNavigator();

const { width } = Dimensions.get("window");

const NotificationStack = () => {
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

  export default NotificationStack