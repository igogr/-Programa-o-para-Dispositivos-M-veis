import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { estatisticas } from '../data/estatisticas';

export default function EstatisticasScreen() {
  const mediaGols = (estatisticas.totalGols / estatisticas.totalJogos).toFixed(2);
  const mediaPublico = Math.round(estatisticas.totalPublico / estatisticas.totalJogos);
  const mediaCartoes = (estatisticas.totalCartoes / estatisticas.totalJogos).toFixed(2);

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Card style={{ marginBottom: 16 }}>
        <Card.Content>
          <Text variant="titleMedium">Total de Gols: {estatisticas.totalGols}</Text>
          <Text>Média de Gols por Jogo: {mediaGols}</Text>
        </Card.Content>
      </Card>

      <Card style={{ marginBottom: 16 }}>
        <Card.Content>
          <Text variant="titleMedium">Total de Público: {estatisticas.totalPublico}</Text>
          <Text>Média de Público por Jogo: {mediaPublico}</Text>
        </Card.Content>
      </Card>

      <Card style={{ marginBottom: 16 }}>
        <Card.Content>
          <Text variant="titleMedium">Total de Cartões: {estatisticas.totalCartoes}</Text>
          <Text>Média de Cartões por Jogo: {mediaCartoes}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
