import { Image, Text, TouchableOpacity, View, ToastAndroid, Modal } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { CreditCard, LockKeyhole, LogOut, LucideIcon, Moon, UserPen } from 'lucide-react-native';
import { Button } from '@/components/button';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SettingsRootList } from '@/navigation/private/settings/settings.navigation';
import { AppRootList } from '@/navigation/private/private.navigations';
import { useProfile } from './model';

export const ProfileView = ({
  PROFILE_OPTIONS,
  handleLogoutModalDesactive,
  handlePickImage,
  image,
  logoutModal,
  logoutButton
}: ReturnType<typeof useProfile>) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <View style={styles.avatar}>
          <Image width={96} height={96} borderRadius={999} source={{ uri: image }} />
          <TouchableOpacity style={styles.buttonUpload} onPress={handlePickImage}>
            <Feather name="upload" size={16} color="white" />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.nameText}>Israel Cruz F.</Text>
          <Text style={styles.detailsText}>israelcruz@arch.com / New York, US</Text>
        </View>
      </View>

      <View style={styles.infosArea}>
        <View style={styles.infoCardArea}>
          <Text style={styles.infoHeadingText}>Clientes</Text>
          <Text style={styles.infoText}>200</Text>
        </View>

        <View style={styles.infoCardArea}>
          <Text style={styles.infoHeadingText}>Projetos</Text>
          <Text style={styles.infoText}>16</Text>
        </View>
      </View>

      <View style={styles.optionsArea}>
        {PROFILE_OPTIONS.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionArea}
            onPress={option.interactiveFunction}>
            <View style={styles.optionViewArea}>
              <View style={styles.optionIconArea}>
                <option.icon size={24} color="black" />
              </View>

              <Text>{option.name}</Text>
            </View>

            <Feather name="chevron-right" size={24} color="#636264" />
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={logoutModal}
        onRequestClose={handleLogoutModalDesactive}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Você tem certeza que deseja sair da sua conta?</Text>
            <View style={{ width: '100%', gap: 12 }}>
              <Button text="Sair" onPress={logoutButton} />
              <Button text="Voltar" variant="secondary" onPress={handleLogoutModalDesactive} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
