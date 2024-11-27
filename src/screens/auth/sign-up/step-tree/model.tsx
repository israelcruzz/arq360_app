import { NavigationProp, useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import { AuthRootList } from '@/navigation/auth.navigation';

export const useSignUpStepTree = () => {
  const [imageUri, setImageUri] = useState<string>('https://github.com/israelcruzz.png');

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      aspect: [4, 4],
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const navigation = useNavigation<NavigationProp<AuthRootList>>();

  const handleClickNextScreen = () => {
    navigation.navigate('signUpStepFor');
  };

  return {
    handlePickImage,
    imageUri,
    handleClickNextScreen
  };
};
