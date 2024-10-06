import { useState } from 'react';
import { Alert } from 'react-native';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as ImagePicker from 'expo-image-picker';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRootList } from '@/navigation/private/private.navigations';
type BadgeType = 'projects' | 'clients';

export const useExplorer = () => {
  const [activeBadge, setActiveBadge] = useState<BadgeType>('projects');
  const [addClientModal, setAddClientModal] = useState<boolean>(false);
  const [removeClientModal, setRemoveClientModal] = useState<boolean>(false);
  const [addedClientImage, setAddedClientImage] = useState<string | null>('');

  const validateFormSchemaClient = Yup.object().shape({
    name: Yup.string()
      .min(3, 'O nome deve ter pelo menos 3 caracteres')
      .required('Campo obrigatório'),
    numberTel: Yup.string()
      .matches(/^\(?\d{2}\)?[\s-]?9\d{4}[-\s]?\d{4}$/, 'Número de telefone inválido')
      .required('Campo obrigatório'),
  });

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
    },
  });

  /**
   * Function that formats a phone number based on a regex
   * The regex uses the pattern (xx) xxxxx-xxxx
   * @param {string} text - Value to be formatted
   * @returns {string} - Formatted value
   */
  const formatInputPhone = (text: string) => {
    const cleaned = text.replace(/\D/g, '');

    const match = cleaned.match(/^(\d{2})(\d{0,5})(\d{0,4})$/);

    if (match) {
      const ddd = `(${match[1]})`; 
      const firstPart = match[2]; 
      const secondPart = match[3]; 

      return `${ddd} ${firstPart}${secondPart.length > 0 ? '-' + secondPart : ''}`.trim();
    }

    return cleaned;
  };

  const handleSubmitClientForm = (data: SubmitFormValidateDataClient) => {
    Alert.alert(data.name);
    reset();
    setAddedClientImage(null);
  };

  const handleChangeTextQuery = (query: string) => {
    if (!query.trim()) return;
    Alert.alert(query.trim());
  };

  const handleChangeActiveBadge = () => {
    setActiveBadge((prev) => {
      return prev === 'projects' ? 'clients' : 'projects';
    });
  };

  const handlePickerClientImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      aspect: [4, 4],
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setAddedClientImage(result.assets[0].uri);
    }
  };

  const handleDesactiveRemoveClientModal = () => {
    setRemoveClientModal(false);
  };

  const handleDesactiveAddClientModal = () => {
    setAddClientModal(false);
    reset();
    setAddedClientImage(null);
  };

  const handleRemoveAddedClientImage = () => {
    setAddedClientImage(null);
  };

  const handleActiveAddClientModal = () => {
    setAddClientModal(true);
  };

  const handleActiveRemoveClientModal = () => {
    setRemoveClientModal(true);
  };

  const navigator = useNavigation<NavigationProp<AppRootList>>();

  const handleClickViewProject = () => {
    navigator.navigate('viewProjectFlow', { projectId: '177' });
  }

  return {
    activeBadge,
    addClientModal,
    removeClientModal,
    addedClientImage,
    control,
    handleSubmit,
    formatInputPhone,
    handleSubmitClientForm,
    handleChangeTextQuery,
    handleChangeActiveBadge,
    handlePickerClientImage,
    handleDesactiveRemoveClientModal,
    handleDesactiveAddClientModal,
    handleRemoveAddedClientImage,
    handleActiveAddClientModal,
    handleActiveRemoveClientModal,
    handleClickViewProject,
    errors,
  };
};
