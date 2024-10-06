import { AppRootList } from '@/navigation/private/private.navigations';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export const useHome = () => {
  const navigator = useNavigation<NavigationProp<AppRootList>>();
  const handleClickAvatar = () => {
    // @ts-ignore
    navigator.navigate('tabs', { screen: 'profile' });
  };

  return {
    handleClickAvatar
  }
};
