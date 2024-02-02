import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './App/Screens/HomeScreen/HomeScreen';
import TabNavigation from './App/Navigativigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Homescreen/>
    </View>
  );
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
