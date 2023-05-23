import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from './navigate';

export default function App() {
    return (<MainStack/>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#274584',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
