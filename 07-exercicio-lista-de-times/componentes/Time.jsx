import React from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Jogador from './Jogador';

export default function Time({ nome, anoFundacao, mascote, imagem, jogadores }) {
  return (
    <Card style={styles.card}>
      <Card.Title title={nome} subtitle={`Fundado em ${anoFundacao} - Mascote: ${mascote}`} />
      <Card.Cover source={{ uri: imagem }} />
      <Text style={styles.tituloJogadores}>Jogadores:</Text>
      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => <Jogador {...item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  tituloJogadores: {
    marginLeft: 16,
    marginTop: 8,
    fontWeight: 'bold',
  },
});
