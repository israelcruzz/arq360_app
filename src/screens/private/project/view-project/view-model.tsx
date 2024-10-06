import { useViewProject } from './model';
import { ViewProjectView } from './view';

export const ViewProjectViewModel = () => {
  const {
    animationConfigs,
    bottomSheetRef,
    handleClickInButtonToSendMessage,
    handleCloseBottomSheet,
    handleOpenBottomSheet,
    handleSettingProjectMenuInvisible,
    handleSettingProjectMenuVisible,
    settingProjectMenuVisible,
    snapPoints,
    handleClickViewConvenient
  } = useViewProject();

  return (
    <ViewProjectView
      animationConfigs={animationConfigs}
      bottomSheetRef={bottomSheetRef}
      handleClickInButtonToSendMessage={handleClickInButtonToSendMessage}
      handleCloseBottomSheet={handleCloseBottomSheet}
      handleOpenBottomSheet={handleOpenBottomSheet}
      handleSettingProjectMenuInvisible={handleSettingProjectMenuInvisible}
      handleSettingProjectMenuVisible={handleSettingProjectMenuVisible}
      settingProjectMenuVisible={settingProjectMenuVisible}
      snapPoints={snapPoints}
      handleClickViewConvenient={handleClickViewConvenient}
    />
  );
};
