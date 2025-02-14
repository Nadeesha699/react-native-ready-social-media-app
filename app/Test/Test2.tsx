import axios from "axios"
import { TouchableOpacity,Text } from "react-native"
import { commanApi } from "../components/components"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { router } from "expo-router"

const Test2 = ()=>{
    return(
        <TouchableOpacity onPress={async ()=>{
           const resp = await axios.get(`${commanApi}/user/get-All/17`)
           const id = resp.data.data[0].Id
           await AsyncStorage.setItem('tid',id)
           router.navigate('/Test/Test')
        }}>
            <Text>go</Text>
        </TouchableOpacity>
    )
}

export default Test2