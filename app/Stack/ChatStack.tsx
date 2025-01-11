import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dimensions } from "react-native";
import ChatList from "../screen/ChatList";
import UserMessages from "../screen/UserMessage";

const Stack = createNativeStackNavigator();

const { width } = Dimensions.get("window");

const ChatStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Chats"
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

  export default ChatStack;