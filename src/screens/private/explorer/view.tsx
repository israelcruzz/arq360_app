import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, Image, Modal, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { Button } from "../../../components/button"
import { CardProject } from "~/components/card-project";
import { ClientLine } from "~/components/client-line";
import { HeadingText } from "~/components/heading-text";
import { Input } from "~/components/input";
import * as Yup from 'yup';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Label } from "~/components/label";
import * as ImagePicker from 'expo-image-picker';
// import WebView from "react-native-webview";

type BadgeType = 'projects' | 'clients'

export const ExplorerView = () => {
  const [activeBadge, setActiveBadge] = useState<BadgeType>('projects');
  const [addClientModal, setAddClientModal] = useState<boolean>(false);
  const [removeClientModal, setRemoveClientModal] = useState<boolean>(false);
  const [addedClientImage, setAddedClientImage] = useState<string | null>('');

  const validateFormSchemaClient = Yup.object().shape({
    name: Yup.string().min(3, 'O nome deve ter pelo menos 3 caracteres').required('Campo obrigatório'),
  })

  type SubmitFormValidateDataClient = Yup.InferType<typeof validateFormSchemaClient>;

  const { control, handleSubmit, formState: { errors } } = useForm<SubmitFormValidateDataClient>({
    resolver: yupResolver(validateFormSchemaClient),
    defaultValues: {
      name: '',
    }
  })

  const handleSubmitClientForm = (data: SubmitFormValidateDataClient) => {
    Alert.alert(data.name)
  }

  const handleChangeTextQuery = (query: string) => {
    if (!query.trim()) return;
    Alert.alert(query.trim())
  }

  const handleChangeActiveBadge = () => {
    setActiveBadge((prev) => {
      return prev === 'projects' ? 'clients' : 'projects'
    })
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

  return (
    <View style={styles.container}>
      <HeadingText title="Explorer" />

      <View style={styles.badgesButtonsArea}>
        <TouchableOpacity
          onPress={handleChangeActiveBadge}
          style={[
            styles.badgeButtonArea,
            activeBadge === 'projects'
              ? styles.badgeButtonAreaActive
              : styles.badgeButtonAreaDesactive,
          ]}
          activeOpacity={0.9}>
          <Text
            style={[
              activeBadge === 'projects' ? styles.badgeTextActive : styles.badgeTextDesactive,
            ]}>
            Projetos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleChangeActiveBadge}
          style={[
            styles.badgeButtonArea,
            activeBadge === 'clients'
              ? styles.badgeButtonAreaActive
              : styles.badgeButtonAreaDesactive,
          ]}
          activeOpacity={0.8}>
          <Text
            style={[
              activeBadge === 'clients' ? styles.badgeTextActive : styles.badgeTextDesactive,
            ]}>
            Clientes
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        {
          activeBadge === 'projects' ? (
            <>
              <Input onChangeText={handleChangeTextQuery} placeholder="Pesquisar">
                <Feather name="search" size={24} color="#828282" />
              </Input>
              <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.projectArea}>
                {
                  Array.from({ length: 10 }).map((_, index) => {
                    return (
                      <CardProject
                        key={`@arq360/card-project-${index}`}
                        imageUri="https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        locate="São Paulo, SP"
                        title="Apartamento DBZ"
                      />
                    )
                  })
                }
              </ScrollView>
            </>

          ) : (
            <>
              <View style={styles.searchClientArea}>
                <View style={{ flex: 1 }}>
                  <Input onChangeText={handleChangeTextQuery} placeholder="Pesquisar">
                    <Feather name="search" size={24} color="#828282" />
                  </Input>
                </View>

                <TouchableOpacity style={styles.addClientButton} onPress={() => setAddClientModal(true)}>
                  <Feather name="plus" size={24} color="#FFFFFF" />
                </TouchableOpacity>
              </View>

              <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.projectArea}>
                {
                  Array.from({ length: 10 }).map((_, index) => {
                    return <ClientLine onPress={() => setRemoveClientModal(true)} imageUri="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Vanessa Lopes C." key={`@arq360/client-line-${index}-${new Date()}`} />
                  })
                }
              </ScrollView>

              <Modal
                animationType="fade"
                transparent
                visible={addClientModal}
                onRequestClose={() => setAddClientModal(false)}>
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
                        <Label title="Imagem (Opcional)" />
                        {
                          addedClientImage ? (
                            <View style={{ width: 64, height: 64, borderRadius: 999 }}>
                              <Image source={{ uri: addedClientImage }} style={{ width: 64, height: 64, borderRadius: 999 }} />
                              <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, borderRadius: 999, backgroundColor: '#000000', padding: 4 }}>
                                <Feather name="x" size={18} color="#FFFFFF" onPress={() => setAddedClientImage(null)} />
                              </TouchableOpacity>
                            </View>
                          ) : (
                            <TouchableOpacity onPress={handlePickerClientImage} style={{ width: 64, height: 64, borderRadius: 999, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E8ECF4' }}>
                              <Feather name="plus" size={24} color="#000000" />
                            </TouchableOpacity>
                          )
                        }

                      </View>
                    </View>

                    <View style={{ width: '100%', gap: 12 }}>
                      <Button onPress={handleSubmit(handleSubmitClientForm)} text="Criar" />
                      <Button text="Voltar" variant="secondary" onPress={() => setAddClientModal(false)} />
                    </View>
                  </View>
                </View>
              </Modal>

              <Modal
                animationType="fade"
                transparent
                visible={removeClientModal}
                onRequestClose={() => setRemoveClientModal(false)}>
                <View style={styles.modalOverlay}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Você deseja excluir este cliente?</Text>
                    <View style={{ width: '100%', gap: 12 }}>
                      <Button text="Excluir" />
                      <Button text="Voltar" variant="secondary" onPress={() => setRemoveClientModal(false)} />
                    </View>
                  </View>
                </View>
              </Modal>
            </>
          )
        }
      </View>
    </View>
    // <WebView
    //   style={styles.container}
    //   source={{ uri: 'https://dgbmm.csb.app/' }}
    // />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24
  },
  badgesButtonsArea: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
    marginTop: 12,
  },
  badgeButtonArea: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16
  },
  badgeTextActive: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16
  },
  badgeTextDesactive: {
    color: '#000000',
    fontWeight: 'semibold'
  },
  badgeButtonAreaDesactive: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8ECF4',
  },
  badgeButtonAreaActive: {
    backgroundColor: '#000000',
  },
  projectArea: {
    paddingBottom: 200,
    paddingTop: 24,
    gap: 24
  },
  searchClientArea: {
    flexDirection: 'row',
    width: '100%',
    gap: 12
  },
  addClientButton: {
    backgroundColor: '#000000',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 400,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    gap: 24
  },
  modalText: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-start'
  },
  errorText: {
    color: 'red',
    marginTop: 8
  },
});