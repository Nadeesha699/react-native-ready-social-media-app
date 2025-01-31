import axios from "axios"
import { useEffect } from "react"
import { View,Text } from "react-native"

const MessageTest = () =>{
  useEffect(()=>{
    const loadData = async () =>{
      const resp = await axios.get('http://localhost:4000/api/comment/all/by-id/1')
     console.log(resp.data)
    }
    loadData()
  },[])
  return(
    <View>
      <Text>Hello world</Text>
    </View>
  )
}

export default MessageTest