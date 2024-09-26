import { View } from "react-native"
import { styles } from "./styles"
import { BackButton } from "~/components/back-button"
import { HeadingText } from "~/components/heading-text"
import { DescriptionText } from "~/components/description-text"
import { Button } from "~/components/button"

export enum RoomType {
  LivingRoom = 'livingRoom',
  Bedroom = 'bedroom',
  Kitchen = 'kitchen',
  Bathroom = 'bathroom',
}

export interface IConvenient {
  type: RoomType;
  image360Uri: string;
  coverImage: string
}

export const CreateProjectStepTreeView = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <BackButton />
          <View style={styles.textHeaderArea}>
            <HeadingText title="Adicionar Clientes" />
            <DescriptionText text="Your new password must be unique from those previously used." />
          </View>
        </View>

      </View>

      <View style={{ gap: 24 }}>
        <Button text="Pular" variant="secondary" />
        <Button text="Próximo" variant="primary" />
      </View>
    </View>
  )
}