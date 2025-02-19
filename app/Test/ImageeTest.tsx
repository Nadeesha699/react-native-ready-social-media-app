import React, { useState } from "react";
import { View, Button, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImageTest = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleSelectImage = async () => {
    // Request permissions (only needed for older Expo versions)
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "You need to allow access to photos.");
      return;
    }

    // Open the gallery
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true, // Get base64 string
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View>
      <Button title="Select Image" onPress={handleSelectImage} />
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default ImageTest;
