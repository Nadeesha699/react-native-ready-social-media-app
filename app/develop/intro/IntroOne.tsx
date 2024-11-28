import { View, Text, Button } from "react-native";

function IntroOne() {
   return(
    <View>
        <Text>first layer</Text>
        <Button onPress={()=>{}} title="next"/>
        <Button onPress={()=>{}} title="skip"/>
    </View>
   ) 
}

export default IntroOne;