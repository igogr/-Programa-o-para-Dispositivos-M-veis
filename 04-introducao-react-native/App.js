import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//

export default function App() {
  return (
    <View style={styles.container}>
      <Text>O Pedro gosta do menino!</Text>
      <Text>O Ricardo gosta do Gabriel!</Text>
      <Text>O Gustavo gosta do Pedro!</Text>                           
                        
      <StatusBar style="auto" />
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
