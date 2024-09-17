jest.mock('react-native-webview', () => {
  const React = require('react');
  return {
    default: () => React.Fragment,
    WebView: () => React.Fragment,
  };
});