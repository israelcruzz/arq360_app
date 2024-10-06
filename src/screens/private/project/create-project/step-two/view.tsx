import { Alert, Image, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { BackButton } from "@/components/back-button"
import { HeadingText } from "@/components/heading-text"
import { DescriptionText } from "@/components/description-text"
import { Controller, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { useState } from "react"
import { Feather } from "@expo/vector-icons"
import { Button } from "@/components/button"
import * as ImagePicker from 'expo-image-picker'
import { ConvenientLine } from "@/components/convenient-line"

export enum RoomType {
  LivingRoom = 'livingRoom',
  Bedroom = 'bedroom',
  Kitchen = 'kitchen',
  Bathroom = 'bathroom',
}

export interface IConvenient {
  type: RoomType;
  image360Uri: string;
  coverImage: string
}

export const CreateProjectStepTwoView = () => {
  const [coverImageProject, setCoverImageProject] = useState<string | null>(null);
  const [addConvenientModal, setAddConvenientModal] = useState<boolean>(false);

  const [convenientList, setConvenientList] = useState<IConvenient[]>([]);

  const validateFormSchema = Yup.object().shape({
    type: Yup.string().oneOf(Object.values(RoomType)).required('Campo obrigatório'),
    image360Uri: Yup.string().url("Url inválida").required('Campo obrigatório'),
  })

  // https://i.imgur.com/4pLkGz2l.jpg

  type SubmitFormValidateData = Yup.InferType<typeof validateFormSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitFormValidateData>({
    resolver: yupResolver(validateFormSchema),
    defaultValues: {
      type: RoomType.Bedroom,
      image360Uri: '',
    }
  })

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      aspect: [4, 4],
      quality: 1,
      allowsEditing: true
    })

    if (!result.canceled) {
      setCoverImageProject(result.assets[0].uri);
    }
  }

  const handleRemoveCoverImage = () => {
    setCoverImageProject(null);
  }

  const handleSubmitForm = (data: SubmitFormValidateData) => {
    Alert.alert('Dados do Form', `Nome: ${data.type} & Descrição: ${data.image360Uri}`);

    const dataConvenient: IConvenient = {
      type: data.type,
      image360Uri: data.image360Uri,
      coverImage: "coverImageProject"
    }

    setConvenientList((prev) => [...prev, dataConvenient]);
  }

  const handleDesactiveAddConvenientModal = () => {
    setAddConvenientModal(false);
  }

  const handleActiveAddConvenientModal = () => {
    setAddConvenientModal(true);
  }

  return (
    <View style={styles.container}>
      <View>
        <View>
          <BackButton />
          <View style={styles.textHeaderArea}>
            <HeadingText title="Criar Cômodo" />
            <DescriptionText text="Your new password must be unique from those previously used." />
          </View>

          <View style={{ gap: 24 }}>
            {convenientList.length > 0 &&
              convenientList.map((convenient, index) => (
                <ConvenientLine key={`@arq360/convenient-${index}-${new Date()}`} coverImage={convenient.coverImage} image360Uri={convenient.image360Uri} type={convenient.type} />
              ))
            }
          </View>
        </View>

      </View>

      {
        convenientList.length === 0 && <Image source={require('../../../../../assets/images/warning.png')} width={200} height={200} />
      }

      <Modal
        animationType="fade"
        transparent
        visible={addConvenientModal}
        onRequestClose={handleDesactiveAddConvenientModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adicione um cômodo</Text>
            <View style={styles.formArea}>
              <View>
                <Label title="Tipo do Cômodo" />
                <Controller
                  control={control}
                  name="type"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder="Casa Exemplo"
                      placeholderTextColor="#D1D1D1"
                      keyboardType="default"
                      isErrorValidate={!!errors.type}
                    />
                  )}
                />
                {errors.type && <Text style={styles.error}>{errors.type.message}</Text>}
              </View>

              <View>
                <Label title="Image 360 Uri" />
                <Controller
                  control={control}
                  name="image360Uri"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder="https://image360.png"
                      placeholderTextColor="#D1D1D1"
                      keyboardType="default"
                      isErrorValidate={!!errors.image360Uri}
                    />
                  )}
                />
                {errors.image360Uri && <Text style={styles.error}>{errors.image360Uri.message}</Text>}
              </View>

              <View>
                <Label title="Imagem do Cômodo" />
                {
                  coverImageProject ? (
                    <View style={styles.coverImageArea}>
                      <Image
                        width={128 + 98}
                        height={128 + 16}
                        borderRadius={16}
                        source={{ uri: coverImageProject }}
                      />
                      <TouchableOpacity style={styles.dropCoverImageButton} onPress={handleRemoveCoverImage}>
                        <Feather name="x" size={16} color="white" />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View style={styles.coverImageAreaDesactive}>
                      <TouchableOpacity style={styles.buttonUpload} onPress={handlePickImage}>
                        <Feather name="plus" size={24} color="black" />
                      </TouchableOpacity>
                    </View>
                  )
                }
              </View>
            </View>
            <View style={{ width: '100%', gap: 12 }}>
              <Button text="Voltar" variant="secondary" onPress={handleDesactiveAddConvenientModal} />
              <Button text="Criar" onPress={handleSubmit(handleSubmitForm)} />
            </View>
          </View>
        </View>
      </Modal>

      <View style={{ gap: 24 }}>
        <Button text="Criar Cômodo" variant="secondary" onPress={handleActiveAddConvenientModal} />
        <Button text="Próximo" variant="primary" onPress={handleSubmit(handleSubmitForm)} />
      </View>
    </View>
  )
}