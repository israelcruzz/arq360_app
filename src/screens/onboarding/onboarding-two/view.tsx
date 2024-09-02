import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useOnboardingTwo } from './model';

export const OnboardingTwoView = ({
  handleClickNextButton,
  handleClickSkipButton,
}: ReturnType<typeof useOnboardingTwo>) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('src/assets/images/onboarding-image-two.png')}
          resizeMode="cover"
        />
      </View>

      <View style={styles.contentArea}>
        <View style={styles.textArea}>
          <View>
            <Text style={styles.headerText}>Mostre Seus Projetos com Facilidade</Text>
          </View>

          <Text style={styles.descriptionText}>
            Armazene todos os seus projetos arquitetônicos em um só lugar. Acesse e organize de
            eficiente e intuitiva.
          </Text>
        </View>
        <View style={styles.navigateButtonsArea}>
          <View style={styles.navigateButtonDesactive} />
          <View style={styles.navigateButtonActive} />
        </View>

        <View style={styles.buttonsArea}>
          <TouchableOpacity onPress={handleClickSkipButton}>
            <Text style={styles.linkText}>Pular</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.nextButton} onPress={handleClickNextButton}>
            <Text style={styles.nextButtonText}>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};