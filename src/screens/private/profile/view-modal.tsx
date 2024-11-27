import { useProfile } from './model';
import { ProfileView } from './view';

export const ProfileViewModal = () => {
  const {
    PROFILE_OPTIONS,
    handleLogoutModalDesactive,
    handlePickImage,
    image,
    logoutModal,
    logoutButton,
  } = useProfile();

  return (
    <ProfileView
      logoutButton={logoutButton}
      PROFILE_OPTIONS={PROFILE_OPTIONS}
      handleLogoutModalDesactive={handleLogoutModalDesactive}
      handlePickImage={handlePickImage}
      image={image}
      logoutModal={logoutModal}
    />
  );
};
