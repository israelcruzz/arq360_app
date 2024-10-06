import { ToastAndroid } from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { CreditCard, LockKeyhole, LogOut, LucideIcon, Moon, UserPen } from 'lucide-react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRootList } from '@/navigation/private/private.navigations';

interface IProfileOptions {
  name: string;
  icon: LucideIcon;
  interactiveFunction?: () => void;
}

export const useProfile = () => {
  const [image, setImage] = useState<string>('https://github.com/israelcruzz.png');
  const [logoutModal, setLogoutModal] = useState<boolean>(false);

  const handleLogoutModalActive = () => {
    setLogoutModal(true);
  };

  const handleLogoutModalDesactive = () => {
    setLogoutModal(false);
  };

  const navigator = useNavigation<NavigationProp<AppRootList>>();

  const PROFILE_OPTIONS: IProfileOptions[] = [
    {
      name: 'Editar Informações',
      icon: UserPen,
      interactiveFunction: () => navigator.navigate('settingsFlow', { screen: 'editInformation' }),
    },
    {
      name: 'Editar Senha',
      icon: LockKeyhole,
      interactiveFunction: () => navigator.navigate('settingsFlow', { screen: 'changePassword' }),
    },
    {
      name: 'Tema',
      icon: Moon,
      interactiveFunction: () => navigator.navigate('settingsFlow', { screen: 'changeTheme' }),
    },
    {
      name: 'Assinatura',
      icon: CreditCard,
    },
    {
      name: 'Sair',
      icon: LogOut,
      interactiveFunction: () => handleLogoutModalActive(),
    },
  ];

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      aspect: [4, 4],
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      ToastAndroid.show('Imagem selecionada', ToastAndroid.SHORT);
    }
  };

  return {
    image,
    logoutModal,
    PROFILE_OPTIONS,
    handleLogoutModalDesactive,
    handlePickImage,
  };
};
