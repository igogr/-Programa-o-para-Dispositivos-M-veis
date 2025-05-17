import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Button, Text } from 'react-native-paper';
import MegaSenaCard from '../components/MegaSenaCard';

export default function MegaSenaScreen() {
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  function gerarJogo() {
    const dezenas = new Set();
    while (dezenas.size < 6) {
      dezenas.add(Math.floor(Math.random() * 60) + 1);
    }
    const jogoOrdenado = Array.from(dezenas).sort((a, b) => a - b);
    setJogosMegaSena([jogoOrdenado, ...jogosMegaSena]);
  }

  function limparJogos() {
    setJogosMegaSena([]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gerador de Jogos da Mega-Sena</Text>

      <View style={styles.botoes}>
        <Button
          mode="contained"
          onPress={gerarJogo}
          buttonColor="#2e7d32"
          textColor="white"
          style={styles.botao}
        >
          Gerar Jogo
        </Button>

        <Button
          mode="outlined"
          onPress={limparJogos}
          textColor="#2e7d32"
          style={styles.botao}
        >
          Limpar Resultados
        </Button>
      </View>

      <FlatList
        data={jogosMegaSena}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <MegaSenaCard dezenas={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: 20,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 10,
  },
  botao: {
    flex: 1,
  },
});
