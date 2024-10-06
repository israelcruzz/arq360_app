import { Alert } from "react-native"
import { useState } from "react"
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as ImagePicker from 'expo-image-picker'
import { CLIENTS_MOCK, IClient } from "@/mocks/clients"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { CreateProjectRootList } from "@/navigation/private/project/create-project.navigation"

export const useCreateProjectStepTree = () => {
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

  const navigator = useNavigation<NavigationProp<CreateProjectRootList>>();

  const handleClickNextScreen = () => {
    navigator.navigate('createProjectStepSuccess');
  }

  return {
    addClientModal,
    addedClientImage,
    removeClientModal,
    selectedClient,
    control,
    handleSubmit,
    errors,
    formatInputPhone,
    handleActiveAddClientModal,
    handleDesactiveAddClientModal,
    handlePickerClientImage,
    handleRemoveAddedClientImage,
    handleChangeTextQuery,
    handleDesactiveRemoveClientModal,
    handleSubmitClientForm,
    handleSelectClient,
    handleRemoveSelectedClient,
    handleClickNextScreen
  }
}