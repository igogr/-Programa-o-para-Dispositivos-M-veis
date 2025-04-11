import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Title style={{ marginBottom: 20 }}>Associação Chapecoense de Futebol</Title>
      <Image
        source={{
          uri: 'https://toppng.com/uploads/preview/chapecoense-sc-football-logo-png-11536011420nvxtgdjjau.png',
        }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  image: { width: 200, height: 200 },
});
