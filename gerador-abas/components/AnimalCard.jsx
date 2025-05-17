import React from 'react';
import { Card, Text } from 'react-native-paper';
import { Image } from 'react-native';

export default function AnimalCard({ animal }) {
  return (
    <Card style={{ marginTop: 20 }}>
      <Card.Content>
        <Text variant="titleLarge">{animal.nome}</Text>
        <Image source={{ uri: animal.imagem }} style={{ width: '100%', height: 200, borderRadius: 8, marginTop: 10 }} />
      </Card.Content>
    </Card>
  );
}