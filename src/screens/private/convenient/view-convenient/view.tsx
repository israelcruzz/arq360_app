import WebView from 'react-native-webview';
import { styles } from './styles';
import { View } from 'react-native';
import { BackButton } from '@/components/back-button';

export const ViewConvenientView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backButtonArea}>
        <BackButton />
      </View>
      <WebView style={{ flex: 1 }} source={{ uri: 'https://dgbmm.csb.app/' }} />
    </View>
  );
};
