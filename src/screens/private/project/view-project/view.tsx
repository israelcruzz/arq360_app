import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { styles } from './styles';
import { BackButton } from '@/components/back-button';
import { Button as Btn } from '../../../../components/button';
import { HeadingText } from '@/components/heading-text';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Bath, Edit, MapPin, Ruler, Settings, Trash, X } from 'lucide-react-native';
import MapView from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';
import { useViewProject } from './model';

export const ViewProjectView = ({
  animationConfigs,
  bottomSheetRef,
  handleClickInButtonToSendMessage,
  handleCloseBottomSheet,
  handleOpenBottomSheet,
  handleSettingProjectMenuInvisible,
  handleSettingProjectMenuVisible,
  settingProjectMenuVisible,
  snapPoints
}: ReturnType<typeof useViewProject>) => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.contentArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewArea}>
          <View style={styles.imageArea}>
            <Image
              style={styles.imageProjectArea}
              source={require('@/assets/images/house-example.png')}
            />

            <LinearGradient
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0, 0.6)']}
              style={styles.gradient}
            />

            <View style={styles.buttonBackArea}>
              <BackButton />
            </View>

            <View style={styles.buttonEditArea}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={handleSettingProjectMenuVisible}
                style={styles.buttonEdit}>
                <Settings size={20} color="#2A2A2A" />
              </TouchableOpacity>

              <Modal animationType="fade" transparent visible={settingProjectMenuVisible}>
                <View style={styles.modalOverlay}>
                  <View style={styles.modalContent}>
                    <View style={styles.textConfigArea}>
                      <Text style={styles.configText}>Configurações</Text>
                      <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={handleSettingProjectMenuInvisible}>
                        <X size={20} color="#2A2A2A" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.optProjArea}>
                      <Edit size={20} color="#2A2A2A" />
                      <Text style={styles.modalText}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optProjArea}>
                      <Trash size={20} color="#2A2A2A" />
                      <Text style={styles.modalText}>Excluir</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>

            <View style={styles.textImageArea}>
              <Text style={styles.headingTextImage}>Casa de Praia</Text>
              <View style={styles.infosArea}>
                <MapPin size={18} color={'#BDBDBE'} />
                <Text style={styles.descriptionTextImage}>São Paulo, SP</Text>
              </View>
            </View>
          </View>

          <View style={styles.blockClientArea}>
            <HeadingText title="Cliente" variant="lg" />

            <View>
              <View style={styles.clientArea}>
                <View style={styles.clientAreaInfos}>
                  <Image
                    style={styles.clientImage}
                    source={{ uri: 'https://github.com/israelcruzz.png' }}
                  />

                  <View>
                    <Text style={styles.clientNameText}>Israel Cruz</Text>
                    <Text style={styles.clientDetailsText}>Cliente</Text>
                  </View>
                </View>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.clientAreaButtonMessage}
                  onPress={handleClickInButtonToSendMessage}>
                  <MaterialCommunityIcons name="message-text" size={20} color="#353945" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.blockDescriptionArea}>
            <HeadingText title="Descrição" variant="lg" />

            <View style={styles.boxAreaContainer}>
              <View style={styles.boxArea}>
                <View style={styles.boxAreaIcon}>
                  <Ruler size={24} color="#FFFFFF" />
                </View>

                <View>
                  <Text style={styles.boxAreaTextHeading}>Tamanho</Text>
                  <Text style={styles.boxAreaTextInfo}>24m²</Text>
                </View>
              </View>

              <View style={styles.boxArea}>
                <View style={styles.boxAreaIcon}>
                  <Bath size={24} color="#FFFFFF" />
                </View>

                <View>
                  <Text style={styles.boxAreaTextHeading}>Cômodos</Text>
                  <Text style={styles.boxAreaTextInfo}>24</Text>
                </View>
              </View>
            </View>

            <Text style={styles.descriptionProjectText}>
              Simple house with modern architecture and cool interiors located in the city center
              making master for you to access you to access all over the city.
            </Text>
          </View>

          <View style={styles.locationArea}>
            <HeadingText title="Localidade" variant="lg" />

            <MapView
              initialRegion={{
                latitude: -23.5505,
                longitude: -46.6333,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              style={styles.mapContainer}
            />
          </View>
        </ScrollView>
      </View>

      <View style={styles.convenientArea}>
        <View style={styles.convenientTextArea}>
          <Text style={styles.convenientHeadingText}>Cômodos</Text>
          <Text style={styles.convenientDescriptionText}>Visualize em 360</Text>
        </View>
        <Btn text="Ver Cômodos" onPress={handleOpenBottomSheet} />
      </View>

      <BottomSheet
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        onClose={handleCloseBottomSheet}
        enablePanDownToClose
        index={-1}
        animationConfigs={animationConfigs}
        style={styles.bottomSheet}>
        <BottomSheetView style={styles.bottomSheetArea}>
          <View style={styles.convenientTextArea}>
            <Text style={styles.convenientHeadingText}>Cômodos</Text>
            <Text style={styles.convenientDescriptionText}>Visualize em 360</Text>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.convenientListArea}>
            {Array.from({ length: 4 }).map((_, index) => (
              <View key={index} style={styles.convenientBoxArea}>
                <View style={styles.convenientBox}>
                  <Image
                    source={require('../../../../assets/images/house-example.png')}
                    style={styles.convenientImageCard}
                  />
                  <Text style={styles.convenientText}>Quarto</Text>
                </View>

                <Btn text="Ver" variant="secondary" />
              </View>
            ))}
          </ScrollView>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};
