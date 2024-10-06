import { useHome } from './model';
import { HomeView } from './view';

export const HomeViewModel = () => {
  const { handleClickAvatar, address } = useHome();

  return <HomeView handleClickAvatar={handleClickAvatar} address={address} />;
};
