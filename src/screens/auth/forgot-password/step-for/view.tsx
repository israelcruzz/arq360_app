import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "~/components/button";
import { useForgotPasswordStepFor } from "./model";

export const ForgotPasswordStepForView = ({
  handleNextScreen,
}: ReturnType<typeof useForgotPasswordStepFor>) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentArea}>
        <Image source={require('../../../../assets/images/Successmark.png')} />
        <View style={styles.textArea}>
          <Text style={styles.headingText}>Password Changed!</Text>
          <Text style={styles.descriptionText}>Your password has been changed successfully.</Text>
        </View>
      </View>

      <View style={styles.buttonArea}>
        <Button text="Próximo" onPress={handleNextScreen} />
      </View>
    </View>
  )
}