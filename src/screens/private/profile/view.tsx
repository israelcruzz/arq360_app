import { Image, Text, TouchableOpacity, View, ToastAndroid, Modal } from "react-native"
import { styles } from "./styles"
import { Feather } from "@expo/vector-icons"
import { useState } from "react"
import * as ImagePicker from 'expo-image-picker';
import { CreditCard, LockKeyhole, LogOut, LucideIcon, Moon, UserPen } from "lucide-react-native";
import { Button } from "@/components/button";

interface IProfileOptions {
  name: string;
  to: string;
  icon: LucideIcon;
  interactiveFunction?: () => void
}

export const ProfileView = () => {
  const [image, setImage] = useState<string>('https://github.com/israelcruzz.png');
  const [logoutModal, setLogoutModal] = useState<boolean>(false);

  const handleLogoutModalActive = () => {
    setLogoutModal(true);
  }

  const handleLogoutModalDesactive = () => {
    setLogoutModal(false);
  }

  const PROFILE_OPTIONS: IProfileOptions[] = [
    {
      name: 'Editar Informações',
      to: '/',
      icon: UserPen
    },
    {
      name: 'Editar Senha',
      to: '/',
      icon: LockKeyhole
    },
    {
      name: 'Tema',
      to: '/',
      icon: Moon
    },
    {
      name: 'Assinatura',
      to: '/',
      icon: CreditCard
    },
    {
      name: 'Sair',
      to: '/',
      icon: LogOut,
      interactiveFunction: () => handleLogoutModalActive()
    }
  ]

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      aspect: [4, 4],
      quality: 1,
      allowsEditing: true
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      ToastAndroid.show('Imagem selecionada', ToastAndroid.SHORT)
    }
  }

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
          <TouchableOpacity key={index} style={styles.optionArea} onPress={option.interactiveFunction}>
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
        onRequestClose={handleLogoutModalDesactive}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Você tem certeza que deseja sair da sua conta?</Text>
            <View style={{ width: '100%', gap: 12 }}>
              <Button text="Sair" />
              <Button text="Voltar" variant="secondary" onPress={handleLogoutModalDesactive} />
            </View>
          </View>
        </View>
      </Modal>

    </View>
  )
}