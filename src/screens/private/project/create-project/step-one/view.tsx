import { Text, View } from "react-native"
import { styles } from "./styles"
import { BackButton } from "~/components/back-button"
import { HeadingText } from "~/components/heading-text"
import { DescriptionText } from "~/components/description-text"

export const CreateProjectStepOneView = () => {
  return (
    <View style={styles.container}>
      <View>
        <BackButton />

        <View style={styles.textHeaderArea}>
          <HeadingText title="Create Project" />
          <DescriptionText text="Your new password must be unique from those previously used." />
        </View>

      </View>
    </View>
  )
}