import { HomeIcon, HomeScreen } from '@acme/feature-home';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

import { HELLO } from '@/hello/constants';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeIcon style={{ fontSize: 64 }} />
      <HomeScreen />
      <StatusBar style="auto" />
      <Text>{HELLO}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
