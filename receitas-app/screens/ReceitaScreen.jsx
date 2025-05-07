import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Text, Title, List } from 'react-native-paper';

export default function ReceitaScreen({ route, navigation }) {
  const { receita } = route.params;

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Title>{receita.nome}</Title>
      <Image source={{ uri: receita.imagem }} style={{ width: '100%', height: 200, borderRadius: 10, marginVertical: 10 }} />
      <Text>Tempo de Preparo: {receita.tempoPreparo}</Text>
      <Text>Porções: {receita.porcoes}</Text>

      <Title style={{ marginTop: 16 }}>Ingredientes</Title>
      {receita.ingredientes.map((ing, index) => (
        <List.Item key={index} title={ing} />
      ))}

      <Title style={{ marginTop: 16 }}>Modo de Preparo</Title>
      {receita.modoPreparo.map((passo, index) => (
        <List.Item key={index} title={passo} />
      ))}
    </ScrollView>
  );
}
