import { useChangeTheme } from "./model"
import { ChangeThemeView } from "./view"

export const ChangeThemeViewModel = () => {
  const { handleChangeTheme, themeSelected } = useChangeTheme()

  return <ChangeThemeView handleChangeTheme={handleChangeTheme} themeSelected={themeSelected} />;
}