import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/button';
import { useCreateProjectStepSuccess } from './model';

export const CreateProjectStepSuccessView = ({
  handleClickNextScreen,
  handleClickViewProject,
}: ReturnType<typeof useCreateProjectStepSuccess>) => {
  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <Text style={styles.textHeadingSuccess}>Sucesso!</Text>
        <Text style={styles.textDescriptionSuccess}>
          Your new password must be unique from those previously used.
        </Text>
      </View>

      <Image source={require('@/assets/images/success.png')} style={styles.image} />

      <View style={styles.buttonsArea}>
        <Button text="Voltar para a Home" variant="secondary" onPress={handleClickNextScreen} />
        <Button text="Visualizar Projeto" onPress={handleClickViewProject} />
      </View>
    </View>
  );
};
