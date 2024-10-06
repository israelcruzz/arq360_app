import { Button } from "@/components/button";
import { Image, Text, View } from "react-native";
import { styles } from "@/screens/not-connection/styles";
import { HeadingText } from "@/components/heading-text";
import { DescriptionText } from "@/components/description-text";

export const NotConnectionView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <HeadingText title="Ops... Você está sem internet!" style={styles.textAlign} />
        <DescriptionText text="Parece que você está offline, verifique sua conexão e tente novamente!" style={styles.textAlign} />
      </View>

      <Image source={require("@/assets/images/not-connection.png")} />

      <View style={styles.buttonArea}>
        <Button text="Tentar novamente" />
      </View>
    </View>
  );
}