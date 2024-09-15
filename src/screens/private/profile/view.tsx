import { Image, Text, TouchableOpacity, View, ToastAndroid } from "react-native"
import { styles } from "./styles"
import { Feather } from "@expo/vector-icons"
import { useState } from "react"
import * as ImagePicker from 'expo-image-picker';

export const ProfileView = () => {
  const [image, setImage] = useState<string>('https://github.com/israelcruzz.png');

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      aspect: [4, 4],
      quality: 1,
      allowsEditing: true
    })

    if(!result.canceled) {
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
        {new Array(6).fill(0).map((_, index) => (
          <TouchableOpacity key={index} style={styles.optionArea}>
            <View style={styles.optionViewArea}>
              <View style={styles.optionIconArea}>
                <Feather name="user" size={24} color="black" />
              </View>

              <Text>Edit Profile</Text>
            </View>

            <Feather name="chevron-right" size={24} color="#636264" />
          </TouchableOpacity>
        ))}

      </View>

    </View>
  )
}