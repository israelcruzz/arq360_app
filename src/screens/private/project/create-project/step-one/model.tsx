import { Alert } from "react-native"
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import * as ImagePicker from 'expo-image-picker'
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { CreateProjectRootList } from "@/navigation/private/project/create-project.navigation"

export interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export const useCreateProjectStepOne = () => {

  const [coverImageProject, setCoverImageProject] = useState<string | null>(null);

  const validateFormSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    description: Yup.string().min(6, 'A descrição deve ter pelo menos 6 caracteres').required('Campo obrigatório'),
    cep: Yup.string().matches(/^\d{5}-\d{3}$/, 'CEP deve estar no formato XXXXX-XXX').required('Campo obrigatório'),
    address: Yup.string().required('Campo obrigatório'),
    city: Yup.string().required('Campo obrigatório'),
    number: Yup.number().min(1, "O número deve ser maior que 0").required('Campo obrigatório'),
    neighborhood: Yup.string().required('Campo obrigatório'),
    size: Yup.string().required('Campo obrigatório'),
  })

  type SubmitFormValidateData = Yup.InferType<typeof validateFormSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    watch,
  } = useForm<SubmitFormValidateData>({
    resolver: yupResolver(validateFormSchema),
    defaultValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      number: 0,
      size: '200m²',
      description: '',
      neighborhood: ''
    }
  })

  const observeCep = watch('cep');

  const fetchDataCep = useCallback(async (cep: string) => {
    try {
      const response = await axios.get<ViaCepResponse>(`https://viacep.com.br/ws/${cep}/json/`);

      if (response.data) {
        setValue('address', response.data.logradouro);
        setValue('city', response.data.localidade);
        setValue('neighborhood', response.data.bairro);

        await trigger(['address', 'city', 'neighborhood']);
      }

    } catch (error) {
      console.log(error);
    }
  }, [])

  useEffect(() => {
    if (observeCep.length >= 9) {
      fetchDataCep(observeCep);
    }
  }, [observeCep])


  const formatInputCep = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{5})(\d{0,3})$/);
    return match ? `${match[1]}-${match[2]}` : cleaned;
  };


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

  const handleSubmitForm = (data: SubmitFormValidateData) => {
    navigator.navigate("createProjectStepTwo");
  }

  return {
    control,
    handleSubmit,
    errors,
    handlePickImage,
    handleRemoveCoverImage,
    handleSubmitForm,
    formatInputCep,
    coverImageProject
  };
}