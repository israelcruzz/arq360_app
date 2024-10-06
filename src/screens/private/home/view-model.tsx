import { useHome } from './model';
import { HomeView } from './view';

export const HomeViewModel = () => {
  const { handleClickAvatar } = useHome();

  return <HomeView handleClickAvatar={handleClickAvatar} />;
};
