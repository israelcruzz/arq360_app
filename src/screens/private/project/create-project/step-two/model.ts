import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { CreateProjectRootList } from "@/navigation/private/project/create-project.navigation";

export interface IConvenient {
  type: string;
  image360Uri: string;
  coverImage: string
}

export const useCreateProjectStepTwo = () => {
  const [coverImageProject, setCoverImageProject] = useState<string | null>(null);
  const [addConvenientModal, setAddConvenientModal] = useState<boolean>(false);

  const [convenientList, setConvenientList] = useState<IConvenient[]>([]);

  const validateFormSchema = Yup.object().shape({
    type: Yup.string().required('Campo obrigatório'),
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
      type: '',
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

  const navigator = useNavigation<NavigationProp<CreateProjectRootList>>();

  const handleClickNextScreen = () => {
    navigator.navigate('createProjectStepTree');
  }

  const handleSubmitForm = (data: SubmitFormValidateData) => {
    const dataConvenient: IConvenient = {
      type: data.type,
      image360Uri: data.image360Uri,
      coverImage: data.image360Uri
    }

    setConvenientList((prev) => [...prev, dataConvenient]);
  }

  const handleDesactiveAddConvenientModal = () => {
    setAddConvenientModal(false);
  }

  const handleActiveAddConvenientModal = () => {
    setAddConvenientModal(true);
  }

  const pickerItems = [
    { label: 'Sala', value: 'sala' },
    { label: 'Cozinha', value: 'cozinha' },
    { label: 'Quarto', value: 'quarto' },
    { label: 'Banheiro', value: 'banheiro' },
    { label: 'Escritório', value: 'escritório' },
    { label: 'Lavanderia', value: 'lavanderia' },
    { label: 'Garagem', value: 'garagem' },
    { label: 'Varanda', value: 'varanda' },
  ];
  

  return {
    control,
    handleSubmit,
    formState: { errors },
    coverImageProject,
    addConvenientModal,
    convenientList,
    handlePickImage,
    handleRemoveCoverImage,
    handleSubmitForm,
    handleDesactiveAddConvenientModal,
    handleActiveAddConvenientModal,
    handleClickNextScreen,
    errors,
    pickerItems
  }
}