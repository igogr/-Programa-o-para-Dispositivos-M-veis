import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Serie = ({ nome, ano, diretor, temporadas, capa, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: capa }} style={styles.imagem} />
      <Text style={styles.titulo}>{nome}</Text>
      <Text style={styles.texto}>📆 Ano: {ano}</Text>
      <Text style={styles.texto}>🎬 Diretor: {diretor}</Text>
      <Text style={styles.texto}>📺 Temporadas: {temporadas}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  imagem: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 14,
    color: '#333',
  },
});

export default Serie;
