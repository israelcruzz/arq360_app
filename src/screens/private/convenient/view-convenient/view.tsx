import WebView from "react-native-webview";
import { styles } from "./styles";

export const ViewConvenientView = () => {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://dgbmm.csb.app/' }}
    />
  )
}