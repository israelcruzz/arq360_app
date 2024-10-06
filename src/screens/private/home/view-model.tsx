import { useHome } from './model';
import { HomeView } from './view';

export const HomeViewModel = () => {
  const { handleClickAvatar, address, handleClickSeeAll } = useHome();

  return <HomeView handleClickAvatar={handleClickAvatar} address={address} handleClickSeeAll={handleClickSeeAll} />;
};
