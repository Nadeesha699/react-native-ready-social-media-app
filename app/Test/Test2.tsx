import axios from "axios"
import { TouchableOpacity,Text } from "react-native"
import { commanApi } from "../components/components"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { router } from "expo-router"
import { useEffect } from "react"

const Test2 = ()=>{
    useEffect(()=>{
        const loadDta = async ()=>{
            const resp = await axios.get(`${commanApi}/user/get-All/17`)
            console.log('hello '+ resp.data.data[0])
        }
        loadDta()
    },[])
    return(
        <TouchableOpacity onPress={async ()=>{
           
           
        }}>
            <Text>go</Text>
        </TouchableOpacity>
    )
}

export default Test2