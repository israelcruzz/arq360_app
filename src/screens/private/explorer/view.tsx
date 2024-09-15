import { StyleSheet, Text } from "react-native";
import WebView from "react-native-webview";

export const ExplorerView = () => {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://dgbmm.csb.app/' }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});