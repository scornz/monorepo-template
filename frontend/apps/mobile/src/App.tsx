import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

import { GLOBAL, THISTEST } from '@scornz/api';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{GLOBAL}</Text>
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
