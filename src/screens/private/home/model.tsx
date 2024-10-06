import { AppRootList } from '@/navigation/private/private.navigations';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { useCallback, useEffect, useState } from 'react';

export const useHome = () => {
  const [address, setAddress] = useState<string | null>(null);

  const getLocation = useCallback(async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') return;

    let currentLocation = await Location.getCurrentPositionAsync({});

    const [result] = await Location.reverseGeocodeAsync(currentLocation.coords);
    if (result) {
      setAddress(result.city || result.region || result.name || 'Localiza o desconhecida');
    }
  }, []);

  useEffect(() => {
    getLocation();
  }, []);

  const navigator = useNavigation<NavigationProp<AppRootList>>();
  const handleClickAvatar = () => {
    // @ts-ignore
    navigator.navigate('tabs', { screen: 'profile' });
  };

  return {
    handleClickAvatar,
    address,
  };
};
