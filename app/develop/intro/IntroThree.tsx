import { View, Text, Button } from "react-native";

function IntroThree() {
   return(
    <View>
        <Text>third layer</Text>
        <Button onPress={()=>{}} title="next"/>
        <Button onPress={()=>{}} title="skip"/>
    </View>
   ) 
}

export default IntroThree;