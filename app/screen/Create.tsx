import { Dimensions, ImageBackground, StyleSheet, TouchableOpacity, View,Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type TestScreenProps = {
  navigation: NavigationProp<any>;
};

const { width } = Dimensions.get("window");

const Create: React.FC<TestScreenProps> = () => {
  return (
    <View style={{ flex: 0.5,flexDirection:"column",justifyContent:"space-around",alignItems:"center",padding:width*0.02 }}>
      <TextInput
        left={
          <TextInput.Icon
            icon={({ size }) => <Icon name="format-title" size={size} />}
          />
        }
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        mode="flat"
        label="titile"
        style={styles.input_field1}
      />
      <TextInput
        left={
          <TextInput.Icon
            icon={({ size }) => (
              <Icon name="book-open-page-variant" size={size} />
            )}
          />
        }
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        mode="flat"
        label="story"
        multiline={true}
        numberOfLines={5}
        style={styles.input_field}
      />
      <ImageBackground style={{ width:"100%",justifyContent:"center",alignItems:"center",height:width*0.4,borderRadius:width*0.02,borderStyle: "dotted",borderWidth:width*0.01,borderColor:"#1178ff"}}>
        <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}}>
        <Icon
          name={"upload"}
          size={width * 0.15}
          color={"#1178ff"}
        />
        <Text style={{fontWeight:"bold"}}>Select the cover Image</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  input_field: {
    borderRadius: width * 0.02,
    borderTopRightRadius: width * 0.02,
    borderTopLeftRadius: width * 0.02,
    width: "100%",
  },
  input_field1: {
    borderRadius: width * 0.1,
    borderTopRightRadius: width * 0.1,
    borderTopLeftRadius: width * 0.1,
    width: "100%",
  },
});

export default Create;
