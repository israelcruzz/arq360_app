import 'react-native-reanimated';
import * as Linking from 'expo-linking';
import { useMemo, useRef } from "react";
import { Button, Image, Text, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { styles } from './styles';
import { BackButton } from '~/components/back-button';
import { Button as Btn } from "../../../../components/button";
import { HeadingText } from '~/components/heading-text';

export const ViewProjectView = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['30', '50', '100'], []);

  const handleCloseBottomSheet = () => {
    bottomSheetRef.current?.close();
  }

  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.expand();
  }

  const handleClickInButtonToSendMessage = () => {
    Linking.openURL("https://Wa.me/5511985376628");
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.contentArea}>
        <View>
          <View style={styles.imageArea}>
            <Image style={styles.imageProjectArea} source={require('../../../../assets/images/house-example.png')} />

            <View style={styles.buttonBackArea}>
              <BackButton />
            </View>

            <View style={styles.buttonEditArea}>
              <BackButton />
            </View>

            <View style={styles.textImageArea}>
              <Text style={styles.headingTextImage}>Casa de Praia</Text>
              <Text style={styles.descriptionTextImage}>R$ 1.200.000,00</Text>
            </View>
          </View>

          <View>
            <HeadingText title='Cliente' variant='lg' />

            <View>
              <View>
                <View>
                  <Image source={{ uri: 'https://github.com/israelcruzz.png' }} />

                  <View>
                    <Text>Israel Cruz</Text>
                    <Text>Cliente</Text>
                  </View>
                </View>

                <Button title="Enviar mensagem" onPress={handleClickInButtonToSendMessage} />
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.convenientArea}>
        <View style={styles.convenientTextArea}>
          <Text style={styles.convenientHeadingText}>Cômodos</Text>
          <Text style={styles.convenientDescriptionText}>Visualize em 360</Text>
        </View>
        <Btn text='Ver Cômodos' onPress={handleOpenBottomSheet} />
      </View>

      <BottomSheet
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        enablePanDownToClose
        index={1}
      >
        <BottomSheetView>
          <Text>Awesome 🎉</Text>
          <Button title="Fechar Bottom Sheet" onPress={handleCloseBottomSheet} />
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  )
}