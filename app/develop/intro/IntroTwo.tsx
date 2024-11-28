import { View, Text, Button } from "react-native";

function IntroTwo() {
   return(
    <View>
        <Text>second layer</Text>
        <Button onPress={()=>{}} title="next"/>
        <Button onPress={()=>{}} title="skip"/>
    </View>
   ) 
}

export default IntroTwo;