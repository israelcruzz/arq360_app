import Feather from '@expo/vector-icons/Feather';
import { Image, TouchableOpacity, View } from 'react-native';

import { useSignUpStepTree } from './model';
import { styles } from './styles';

import { BackButton } from '@/components/back-button';
import { Button } from '@/components/button';
import { DescriptionText } from '@/components/description-text';
import { HeadingText } from '@/components/heading-text';

export const SignUpStepTreeView = ({
  handlePickImage,
  imageUri,
  handleClickNextScreen,
}: ReturnType<typeof useSignUpStepTree>) => {
  return (
    <View style={styles.container}>
      <View>
        <BackButton />

        <View style={styles.textHeaderArea}>
          <HeadingText title="Adicionar Foto" />
          <DescriptionText text="Your new password must be unique from those previously used." />
        </View>

        <View style={styles.photoImage}>
          <Image style={styles.image} source={{ uri: imageUri }} width={156} height={156} />
          <TouchableOpacity style={styles.buttonUpload} onPress={handlePickImage}>
            <Feather name="upload" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonsArea}>
        <Button text="Pular" variant="secondary" />
        <Button text="Próximo" onPress={handleClickNextScreen} />
      </View>
    </View>
  );
};
