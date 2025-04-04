import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function Jogador({ nome, numero, imagem }) {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: imagem }} style={styles.imagem} />
      <Card.Content>
        <Text>{nome}</Text>
        <Text>Nº {numero}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    margin: 8,
  },
  imagem: {
    height: 100,
  },
});
