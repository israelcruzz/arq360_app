import { StyleSheet, Text, View } from "react-native";
import { HeadingText } from "~/components/heading-text";

export const SignInView = () => {
  return (
    <View style={styles.container}>
      <HeadingText title="Welcome Back" />
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