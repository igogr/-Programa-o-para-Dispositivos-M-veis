// Imports
import React from 'react';
import { StatusBar } from 'expo-status-bar'; // Importação correta do StatusBar
import { StyleSheet, Text, View, Button, Image, ScrollView, Alert } from 'react-native';

// Função que representa o componente
export default function App() {
  // Lógica do componente
  const nomeJogador = "Memphis Depay";
  const timeJogador = "Corinthians";
  const posicaoJogador = "Atacante";
  const idadeJogador = "31 anos";
  const nacionalidadeJogador = "holandês";

  function alerta() {
    Alert.alert("Gol do Jogador!", "Memphis marcou um gol!");
  }

  // Retorno da função com o template do que vai ser renderizado na tela (JSX)
  return (
    // ScrollView permite que o conteúdo vá até depois da barra de rolagem
    <ScrollView>
      <View style={styles.container}>
        {/* Nome do Jogador */}
        <Text style={styles.nomeJogador}>{nomeJogador}</Text>

        {/* Informações do Jogador */}
        <Text style={styles.infoJogador}>Time: {timeJogador}</Text>
        <Text style={styles.infoJogador}>Posição: {posicaoJogador}</Text>
        <Text style={styles.infoJogador}>Idade: {idadeJogador}</Text>
        <Text style={styles.infoJogador}>Nacionalidade: {nacionalidadeJogador}</Text>

        {/* Botão para exibir o alerta */}
        <Button title="GOL" onPress={alerta} />

        {/* Adicionando 5 imagens do jogador */}
        <Image
  source={{ uri: 'https://th.bing.com/th/id/OIP.qfUeAaJsyu89OecHEQRGgAAAAA?rs=1&pid=ImgDetMain' }}
  style={styles.imagem}
/>
<Image
  source={{ uri: 'https://down-br.img.susercontent.com/file/sg-11134201-7rd5i-m786g561plt55c' }}
  style={styles.imagem}
/>
<Image
  source={{ uri: 'https://library.sportingnews.com/styles/twitter_card_120x120/s3/2024-11/memphis%20depay%2011042024.jpg?itok=C64Bw-cX' }}
  style={styles.imagem}
/>
<Image
  source={{ uri: 'https://imagem.mixvale.com.br/cdn-cgi/imagedelivery/nH4rNJcg3zgkiRPCh6mAdA/www.mixvale.com.br/2024/08/Memphis-Depay.jpg/w=917,h=588' }}
  style={styles.imagem}
/>
<Image
  source={{ uri: 'https://i.pinimg.com/originals/91/65/55/916555f13932875830d05b0c09571337.jpg' }}
  style={styles.imagem}

/>
      </View>
    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  nomeJogador: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoJogador: {
    fontSize: 20,
    marginBottom: 10,
  },
  imagem: {
    height: 200,
    width: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
});