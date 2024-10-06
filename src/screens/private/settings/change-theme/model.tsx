import { useState } from "react"
import { ColorSchemeName, useColorScheme } from "react-native";

export const useChangeTheme = () => {
  const theme = useColorScheme();
  const [themeSelected, setThemeSelected] = useState<ColorSchemeName>(theme);

  const handleChangeTheme = (theme: ColorSchemeName) => {
    setThemeSelected(theme);
  };

  return {
    themeSelected,
    handleChangeTheme
  };
}