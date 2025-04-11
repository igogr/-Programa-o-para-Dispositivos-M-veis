import React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const jogadores = [
  {
    nome: 'Danilo',
    numero: 1,
    imagem: 'https://th.bing.com/th/id/OIP.ISxqmp6GYZZz83e1CTvGJwAAAA?rs=1&pid=ImgDetMain',
  },
  {
    nome: 'Alan Ruschel',
    numero: 28,
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Alanruschel.jpg/250px-Alanruschel.jpg',
  },
  {
    nome: 'Neto',
    numero: 4,
    imagem: 'https://th.bing.com/th/id/OIP.CDy0spkgGJE8m5STkITJswHaE7?rs=1&pid=ImgDetMain',
  },
  {
    nome: 'Jackson Follmann',
    numero: 12,
    imagem: 'https://th.bing.com/th/id/OIP.1_703Jiq_C637IXFFsF0qwHaEZ?rs=1&pid=ImgDetMain',
  },
];

export default function JogadoresScreen() {
  return (
    <FlatList
      data={jogadores}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <List.Item
          title={`${item.nome} - Nº ${item.numero}`}
          left={() => (
            <Image source={{ uri: item.imagem }} style={styles.avatar} />
          )}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  avatar: { width: 50, height: 50, borderRadius: 25, margin: 8 },
});
