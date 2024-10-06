import { useProfile } from "./model";
import { ProfileView } from "./view";

export const ProfileViewModal = () => {
  const {
    PROFILE_OPTIONS,
    handleLogoutModalDesactive,
    handlePickImage,
    image,
    logoutModal
  } = useProfile();

  return (
    <ProfileView
      PROFILE_OPTIONS={PROFILE_OPTIONS}
      handleLogoutModalDesactive={handleLogoutModalDesactive}
      handlePickImage={handlePickImage}
      image={image}
      logoutModal={logoutModal}
    />
  );
}