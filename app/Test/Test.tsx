import axios from "axios"
import { useEffect } from "react"
import { View } from "react-native"
import { commanApi } from "../components/components"

const Test = ()=>{
    useEffect(()=>{
        const loadData =async ()=>{
            const resp = await axios.get(
                `${commanApi}/user/get-All/7`
              );
            console.log(resp.data.data)
        }
        loadData()
    },[])
    return(
        <View>
            
        </View>
    )
}

export default Test