import { Button } from "@/components/button"
import { DescriptionText } from "@/components/description-text"
import { HeadingText } from "@/components/heading-text"
import { Image, View } from "react-native"
import { styles } from "@/screens/private/project/create-project/initial/styles"
import { useCreateProjectInitial } from "./model"

export const CreateProjectInitialView = ({ handleClickNextScreen }: ReturnType<typeof useCreateProjectInitial>) => {
  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <HeadingText title="Crie um Projeto" style={styles.textAlign} />
        <DescriptionText text="Crie um projeto no botão abaixo" style={styles.textAlign} />
      </View>

      <Image source={require('@/assets/images/create-project.png')} />

      <View style={styles.buttonArea}>
        <Button text="Criar Projeto" onPress={handleClickNextScreen} />
      </View>

    </View>
  )
}