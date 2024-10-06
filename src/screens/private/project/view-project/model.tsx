import * as Linking from 'expo-linking';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Alert } from 'react-native';
import BottomSheet, { useBottomSheetTimingConfigs } from '@gorhom/bottom-sheet';
import { Easing } from 'react-native-reanimated';
import { useRoute } from '@react-navigation/native';
import { ProjectViewProps } from '@/navigation/private/project/project.navigation';

export const useViewProject = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['100', '50'], []);
  const [settingProjectMenuVisible, setSettingProjectMenuVisible] = useState<boolean>(false);
  const route = useRoute<ProjectViewProps>();
  const { projectId } = route.params;

  useEffect(() => {
    Alert.alert('O projeto é', projectId);
  });

  const handleCloseBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const handleClickInButtonToSendMessage = () => {
    Linking.openURL('https://Wa.me/5511985376628');
  };

  const handleSettingProjectMenuVisible = () => {
    setSettingProjectMenuVisible(true);
  };

  const handleSettingProjectMenuInvisible = () => {
    setSettingProjectMenuVisible(false);
  };

  const animationConfigs = useBottomSheetTimingConfigs({
    duration: 250,
    easing: Easing.exp,
  });

  return {
    bottomSheetRef,
    snapPoints,
    settingProjectMenuVisible,
    handleCloseBottomSheet,
    handleOpenBottomSheet,
    handleClickInButtonToSendMessage,
    handleSettingProjectMenuVisible,
    handleSettingProjectMenuInvisible,
    animationConfigs,
  };
};
