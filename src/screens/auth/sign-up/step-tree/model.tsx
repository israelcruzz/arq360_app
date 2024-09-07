import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';

export const useSignUpStepTree = () => {
  const [imageUri, setImageUri] = useState<string>('https://github.com/israelcruzz.png');

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      aspect: [4, 4],
      quality: 1,
      allowsEditing: true
    })

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  }

  return {
    handlePickImage,
    imageUri
  }
}