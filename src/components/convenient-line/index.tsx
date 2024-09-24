import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { IConvenient } from '~/screens/private/project/create-project/step-two/view';
import { styles } from './styles';
import { useState } from 'react';
import { Button } from '../button';

interface ConvenientLineProps extends IConvenient {}

export const ConvenientLine = ({ type, coverImage, image360Uri }: ConvenientLineProps) => {
  const [modal, setModal] = useState<boolean>(false);

  const handleActiveModal = () => {
    setModal(true);
  };

  const handleDesactiveModal = () => {
    setModal(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Image source={{ uri: 'https://www.livehome3d.com/assets/img/articles/bedroom-design-ideas/bedroom-design@2x.jpg' }} style={styles.imageCard} />

          <View style={styles.textArea}>
            <View>
              <Text style={styles.textCardType}>Tipo</Text>
              <Text style={styles.textCardTypeHeading}>{type}</Text>
            </View>

            <TouchableOpacity style={styles.editButtonArea} onPress={handleActiveModal}>
              <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.deleteButtonArea}>
            <Feather name="trash" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={modal} onRequestClose={handleDesactiveModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={{ width: '100%', gap: 12 }}>
              <Button text="Voltar" variant="secondary" onPress={handleDesactiveModal} />
              <Button text="Criar" />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
