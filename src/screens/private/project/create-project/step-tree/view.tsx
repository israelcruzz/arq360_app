import { Alert, Image, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { BackButton } from "@/components/back-button"
import { HeadingText } from "@/components/heading-text"
import { DescriptionText } from "@/components/description-text"
import { Button } from "@/components/button"
import { useState } from "react"
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, useForm } from "react-hook-form"
import * as ImagePicker from 'expo-image-picker'
import { Feather } from "@expo/vector-icons"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { CLIENTS_MOCK, IClient } from "@/mocks/clients"

export enum RoomType {
  LivingRoom = 'livingRoom',
  Bedroom = 'bedroom',
  Kitchen = 'kitchen',
  Bathroom = 'bathroom',
}

export const CreateProjectStepTreeView = () => {
  const [addClientModal, setAddClientModal] = useState<boolean>(false);
  const [addedClientImage, setAddedClientImage] = useState<string | null>('');
  const [removeClientModal, setRemoveClientModal] = useState<boolean>(false);
  const [selectedClient, setSelectedClient] = useState<IClient | null>();

  const validateFormSchemaClient = Yup.object().shape({
    name: Yup.string()
      .min(3, 'O nome deve ter pelo menos 3 caracteres')
      .required('Campo obrigatório'),
    numberTel: Yup.string()
      .matches(
        /^\(?\d{2}\)?[\s-]?9\d{4}[-\s]?\d{4}$/,
        'Número de telefone inválido'
      )
      .required('Campo obrigatório'),
  })

  type SubmitFormValidateDataClient = Yup.InferType<typeof validateFormSchemaClient>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SubmitFormValidateDataClient>({
    resolver: yupResolver(validateFormSchemaClient),
    defaultValues: {
      name: '',
      numberTel: '',
    }
  })

  const formatInputPhone = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{0,5})(\d{0,4})$/);

    if (match) {
      const ddd = `(${match[1]})`;
      const firstPart = match[2];
      const secondPart = match[3];

      return `${ddd} ${firstPart}${firstPart.length === 5 ? '' : '9'}${secondPart.length > 0 ? '-' + secondPart : ''}`.trim();
    }

    return cleaned;
  };

  const handleActiveAddClientModal = () => {
    setAddClientModal(true);
  }

  const handleDesactiveAddClientModal = () => {
    setAddClientModal(false);
    reset();
    setAddedClientImage(null);
  }

  const handlePickerClientImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      aspect: [4, 4],
      quality: 1,
      allowsEditing: true
    })

    if (!result.canceled) {
      setAddedClientImage(result.assets[0].uri)
    }
  }

  const handleRemoveAddedClientImage = () => {
    setAddedClientImage(null);
  }

  const handleActiveRemoveClientModal = () => {
    setRemoveClientModal(true);
  }

  const handleChangeTextQuery = (query: string) => {
    if (!query.trim()) return;
    Alert.alert(query.trim())
  }

  const handleDesactiveRemoveClientModal = () => {
    setRemoveClientModal(false);
  }

  const handleSubmitClientForm = (data: SubmitFormValidateDataClient) => {
    Alert.alert(data.name);
    reset();
    setAddedClientImage(null);
    CLIENTS_MOCK.push({
      id: Math.random().toString(),
      name: data.name,
      imageUri: addedClientImage ?? 'https://github.com/israelcruzz.png',
    })
    setAddClientModal(false);
  }

  const handleSelectClient = (client: IClient) => {
    setSelectedClient(client);
  }

  const handleRemoveSelectedClient = () => {
    setSelectedClient(null);
  }

  return (
    <View style={styles.container}>
      <View>
        <View>
          <BackButton />
          <View style={styles.textHeaderArea}>
            <HeadingText title="Adicionar Clientes" />
            <DescriptionText text="Your new password must be unique from those previously used." />
          </View>
        </View>
      </View>

      <>
        <View style={styles.searchClientArea}>
          <View style={{ flex: 1 }}>
            <Input onChangeText={handleChangeTextQuery} placeholder="Pesquisar">
              <Feather name="search" size={24} color="#828282" />
            </Input>
          </View>

          <TouchableOpacity style={styles.addClientButton} onPress={handleActiveAddClientModal}>
            <Feather name="plus" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.projectArea}>
          {
            CLIENTS_MOCK.length > 0 ? CLIENTS_MOCK.map((client, index) => {
              return (
                <View
                  style={styles.clientArea}
                  key={`@arq360/client-line-${client.id}-${index}`}
                >
                  <View style={styles.clientAreaHeader}>
                    <Image
                      width={48}
                      height={48}
                      source={{ uri: client.imageUri }}
                      style={styles.avatar}
                    />

                    <Text style={styles.clientNameText}>{client.name}</Text>
                  </View>
                  {
                    client.id !== selectedClient?.id ? (
                      <TouchableOpacity style={styles.addClientButtonArea} onPress={() => handleSelectClient(client)}>
                        <Text style={styles.addClientButtonText}>Adicionar</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={styles.clientRemoveButton} onPress={handleRemoveSelectedClient}>
                        <Text style={styles.clientRemoveTextButton}>Remover</Text>
                      </TouchableOpacity>
                    )
                  }

                </View>
              )
            }) : (
              <Text>Nenhum cliente encontrado</Text>
            )
          }
        </ScrollView>

        <Modal
          animationType="fade"
          transparent
          visible={addClientModal}
          onRequestClose={handleDesactiveAddClientModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Criar Cliente</Text>

              <View style={{ width: '100%', gap: 8 }}>
                <View>
                  <Label title="Nome" />
                  <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange, value } }) => (
                      <Input onChangeText={onChange} value={value} placeholder="Nome" />
                    )}
                  />
                  {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
                </View>

                <View>
                  <Label title="Número (Celular)" />
                  <Controller
                    control={control}
                    name="numberTel"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        onChangeText={(value) => onChange(formatInputPhone(value))}
                        value={formatInputPhone(value)}
                        keyboardType="numeric"
                        placeholder="(11) 24242-1122"
                      />
                    )}
                  />
                  {errors.numberTel && <Text style={styles.errorText}>{errors.numberTel.message}</Text>}
                </View>

                <View>
                  <Label title="Imagem (Opcional)" />
                  {addedClientImage ? (
                    <View style={{ width: 64, height: 64, borderRadius: 999 }}>
                      <Image source={{ uri: addedClientImage }} style={{ width: 64, height: 64, borderRadius: 999 }} />
                      <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, borderRadius: 999, backgroundColor: '#000000', padding: 4 }}>
                        <Feather name="x" size={18} color="#FFFFFF" onPress={handleRemoveAddedClientImage} />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity onPress={handlePickerClientImage} style={{ width: 64, height: 64, borderRadius: 999, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E8ECF4' }}>
                      <Feather name="plus" size={24} color="#000000" />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              <View style={{ width: '100%', gap: 12 }}>
                <Button onPress={handleSubmit(handleSubmitClientForm)} text="Criar" />
                <Button text="Voltar" variant="secondary" onPress={handleDesactiveAddClientModal} />
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent
          visible={removeClientModal}
          onRequestClose={handleDesactiveRemoveClientModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Você deseja excluir este cliente?</Text>
              <View style={{ width: '100%', gap: 12 }}>
                <Button text="Excluir" />
                <Button text="Voltar" variant="secondary" onPress={handleDesactiveRemoveClientModal} />
              </View>
            </View>
          </View>
        </Modal>
      </>

      <View style={{ gap: 24 }}>
        <Button text="Pular" variant="secondary" />
        <Button text="Próximo" variant="primary" />
      </View>
    </View>
  )
}