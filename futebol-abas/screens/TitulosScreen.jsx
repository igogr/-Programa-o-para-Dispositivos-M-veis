import React from 'react';
import { FlatList } from 'react-native';
import { List } from 'react-native-paper';

const titulos = [
  {
    nome: 'Campeonato Catarinense',
    anos: [1977, 1996, 2007, 2011, 2016, 2017, 2020],
  },
  {
    nome: 'Campeonato Brasileiro - Série B',
    anos: [2020],
  },
  {
    nome: 'Copa Sul-Americana',
    anos: [2016],
  },
];

export default function TitulosScreen() {
  return (
    <FlatList
      data={titulos}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <List.Accordion title={item.nome}>
          {item.anos.map((ano) => (
            <List.Item key={ano} title={`${ano}`} />
          ))}
        </List.Accordion>
      )}
    />
  );
}
