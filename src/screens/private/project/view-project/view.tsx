import 'react-native-reanimated';
import * as Linking from 'expo-linking';
import { useMemo, useRef } from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { styles } from './styles';
import { BackButton } from '~/components/back-button';
import { Button as Btn } from "../../../../components/button";
import { HeadingText } from '~/components/heading-text';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

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

          <View style={styles.blockClientArea}>
            <HeadingText title='Cliente' variant='lg' />

            <View>
              <View style={styles.clientArea}>
                <View style={styles.clientAreaInfos}>
                  <Image style={styles.clientImage} source={{ uri: 'https://github.com/israelcruzz.png' }} />

                  <View>
                    <Text style={styles.clientNameText}>Israel Cruz</Text>
                    <Text style={styles.clientDetailsText}>Cliente</Text>
                  </View>
                </View>

                <TouchableOpacity style={styles.clientAreaButtonMessage} onPress={handleClickInButtonToSendMessage}>
                  <MaterialCommunityIcons name="message-text" size={20} color="#353945" />
                </TouchableOpacity>
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