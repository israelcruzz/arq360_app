import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { useChangeTheme } from "./model";
import { BackButton } from "@/components/back-button";
import { HeadingText } from "@/components/heading-text";
import { DescriptionText } from "@/components/description-text";
import { styles } from "./styles";

export const ChangeThemeView = ({ themeSelected, handleChangeTheme }: ReturnType<typeof useChangeTheme>) => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <BackButton />

          <View style={styles.textHeaderArea}>
            <HeadingText title="Editar Tema" />
            <DescriptionText text="Your new password must be unique from those previously used." />
          </View>
        </View>

        <View style={styles.themeAreaCheckbox}>
          <View style={styles.checkboxArea}>
            <TouchableOpacity
              style={[styles.checkbox, themeSelected === 'light' && styles.checkboxActive]}
              onPress={() => handleChangeTheme('light')}
            />
            <Text style={styles.checkboxText}>Modo Claro</Text>
          </View>

          <View style={styles.checkboxArea}>
            <TouchableOpacity
              style={[styles.checkbox, themeSelected === 'dark' && styles.checkboxActive]}
              onPress={() => handleChangeTheme('dark')}
            />
            <Text style={styles.checkboxText}>Modo Escuro</Text>
          </View>
        </View>
      </View>
    </View>
  )
}