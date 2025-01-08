import { View } from "react-native"

import { NavigationProp } from "@react-navigation/native";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const Create: React.FC<TestScreenProps> = () =>{
    return(
        <View></View>
    )
}

export default Create;