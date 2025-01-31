import React, { useEffect, useState } from "react";
import { View, Button, Image, Alert, ImageBackground } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import axios from "axios";

const ImageTest = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [imageData, setImageData] = useState([
    {
      id: 7,
      imageData: null,
    },
  ]);

  const handleSelectImage = () => {
    launchImageLibrary({ mediaType: "photo" }, (response: any) => {
      if (response.assets) {
        setImageUri(response.assets[0].uri);
        // Convert image to base64
        const uri = response.assets[0].uri;
        fetch(uri)
          .then((res) => res.blob())
          .then((blob) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              setBase64Image((reader.result as string)?.split(",")[1]);
            };
            reader.readAsDataURL(blob);
          });
      }
    });
  };

  const handleUploadImage = async () => {
    if (!base64Image) {
      Alert.alert("Error", "No image selected");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/api/image/add", {
        imageData: base64Image,
      });

      Alert.alert("Success", "Image uploaded successfully!");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to upload image");
    }
  };

  useEffect(() => {
    const loadData = async () => {
      const resp = await axios.get("http://localhost:4000/api/image/get");
      setImageData(resp.data.data)
    };
    loadData();
  }, []);

  return (
    <View>
      <Button title="Select Image" onPress={handleSelectImage} />
      {imageUri && (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      )}
      {imageUri && <Button title="Upload Image" onPress={handleUploadImage} />}
      {imageData.map((e) => {
        return (
          <ImageBackground
          style={{width:100,height:100}}
            source={{ uri: `data:image/jpeg;base64,${e.imageData}` }}
          />
        );
      })}
    </View>
  );
};

export default ImageTest;
