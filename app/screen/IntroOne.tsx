
import { router } from 'expo-router'
import { View,Text,Button } from 'react-native'

export default function IntroOne() {
  return (
    <View style={{backgroundColor:"red",flex:1}}>
       <Text>Intro</Text> 
       <Button onPress={()=>{router.navigate('/screen/Home')}} title='start'></Button>
    </View>
  )
}
