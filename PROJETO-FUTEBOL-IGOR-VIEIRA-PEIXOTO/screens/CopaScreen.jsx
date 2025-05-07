// screens/CopaScreen.js
import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { copa } from '../data/copa';

export default function CopaScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Card>
        <Card.Cover source={{ uri: copa.imagem }} />
        <Card.Content>
          <Text variant="titleLarge">{copa.nome}</Text>
          <Text>Local: {copa.local}</Text>
          <Text>Organização: {copa.organizacao}</Text>
          <Text>Mascote: {copa.mascote}</Text>
          <Text>Edição: {copa.edicao}</Text>
          <Text>Ano: {copa.ano}</Text>
          <Text>Campeão: {copa.campeao}</Text>
          <Text>Vice-Campeão: {copa.viceCampeao}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
