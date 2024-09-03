import { StyleSheet, Text, View } from "react-native";
import { DescriptionText } from "~/components/description-text";
import { HeadingText } from "~/components/heading-text";

export const SignInView = () => {
  return (
    <View style={styles.container}>
      <HeadingText title="Welcome Back" />
      <DescriptionText text="Your new password must be unique from those previously used." />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 48
  }
})