import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, Card, Text, Avatar } from 'react-native-paper';
import { View, ScrollView, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

// Telas
function CopaScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Card>
        <Card.Cover source={{ uri: 'https://i.pinimg.com/236x/00/63/15/00631561f4895a630508c2b0d0bdb4d1.jpg' }} />
        <Card.Content>
          <Text variant="titleLarge">Copa do Mundo FIFA 2022</Text>
          <Text>Local: Qatar</Text>
          <Text>Organização: FIFA</Text>
          <Text>Mascote: La'eeb</Text>
          <Text>Edição: 22</Text>
          <Text>Ano: 2022</Text>
          <Text>Campeão: Argentina</Text>
          <Text>Vice-Campeão: França</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

function EstadiosScreen() {
  const estadios = [
    {
      id: 1,
      nome: "Lusail Iconic Stadium",
      cidade: "Lusail",
      capacidade: 80000,
      imagem: "https://i.pinimg.com/1200x/80/3d/0f/803d0f07020dac1ac638e6dfcc7a0607.jpg"
    },
    {
      id: 2,
      nome: "Al Bayt Stadium",
      cidade: "Al Khor",
      capacidade: 60000,
      imagem: "https://i.pinimg.com/1200x/d9/87/a5/d987a5f490e32083c094839e78e97e67.jpg"
    },
    {
      id: 3,
      nome: "Stadium 974",
      cidade: "Doha",
      capacidade: 40000,
      imagem: "https://i.pinimg.com/1200x/63/47/7b/63477b146143956117fdeb6d06b7b2f6.jpg"
    },
    {
      id: 4,
      nome: "Al Thumama Stadium",
      cidade: "Al Thumama",
      capacidade: 40000,
      imagem: "https://i.pinimg.com/1200x/7c/d4/3f/7cd43f44ceb9a451011c6fb5b4c7b6ad.jpg"
    },
    {
      id: 5,
      nome: "Education City Stadium",
      cidade: "Al Rayyan",
      capacidade: 45350,
      imagem: "https://i.pinimg.com/1200x/91/be/c9/91bec9fa27d8ff1ec426260ba475a185.jpg"
    }
  ];

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {estadios.map((estadio) => (
        <Card key={estadio.id} style={{ marginBottom: 16 }}>
          <Card.Cover source={{ uri: estadio.imagem }} />
          <Card.Content>
            <Text variant="titleMedium">{estadio.nome}</Text>
            <Text>Cidade: {estadio.cidade}</Text>
            <Text>Capacidade: {estadio.capacidade}</Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

function BrasilScreen() {
  const jogadores = [
    { id: "1", nome: "Alisson", numero: "01", imagem: "https://i.pinimg.com/736x/d1/a4/ba/d1a4ba149753aef117e806029f891ed2.jpg" },
    { id: "2", nome: "Danilo", numero: "02", imagem: "https://i.pinimg.com/736x/26/97/5f/26975fb9e00b4f5ab0672e0379e0a07f.jpg" },
    { id: "3", nome: "Thiago Silva", numero: "03", imagem: "https://i.pinimg.com/736x/5c/f1/af/5cf1af138bb144ba679cb8ee96cb2c7a.jpg" },
    { id: "4", nome: "Marquinhos", numero: "04", imagem: "https://i.pinimg.com/736x/0d/63/3e/0d633e78667a2b2daa1a3fa7837ebc1a.jpg" },
    { id: "5", nome: "Alex Sandro", numero: "05", imagem: "https://i.pinimg.com/736x/c1/f3/53/c1f35369a8c352e71031ced93cbd3984.jpg" },
    { id: "6", nome: "Casemiro", numero: "06", imagem: "https://i.pinimg.com/736x/62/56/ee/6256eed0b69864a97ec5f9fc1ca97157.jpg" },
    { id: "7", nome: "Paquetá", numero: "07", imagem: "https://i.pinimg.com/736x/60/8f/db/608fdb49d8c95fd4399a41ed470f36dd.jpg" },
    { id: "8", nome: "Fred", numero: "08", imagem: "https://i.pinimg.com/736x/f3/ef/97/f3ef978107ed4278f619c0f7819e822e.jpg" },
    { id: "9", nome: "Neymar", numero: "09", imagem: "https://i.pinimg.com/736x/56/32/26/56322603f3f95b66ee993abc193b7c94.jpg" },
    { id: "10", nome: "Vinicius Júnior", numero: "10", imagem: "https://i.pinimg.com/736x/8b/90/a3/8b90a360fb9b26d8ce3f96b4834d0c99.jpg" },
    { id: "11", nome: "Richarlison", numero: "11", imagem: "https://i.pinimg.com/736x/fb/66/7d/fb667db98949471ef735215666a7c103.jpg" }
  ];

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Card>
        <Card.Cover source={{ uri: "https://i.pinimg.com/736x/95/8f/7c/958f7ccbb6fcfcb57140d9cd9c3bba3b.jpg" }} />
        <Card.Content>
          <Text variant="titleLarge">Brasil</Text>
          <Text>Treinador: Dorival Junior</Text>
          <Text>Administrador: CBF</Text>
          <Text>Estádio: Maracanã</Text>
          <Text>Títulos da Copa: 5</Text>
        </Card.Content>
      </Card>

      <Text style={{ marginTop: 16, fontWeight: 'bold', fontSize: 18 }}>Jogadores:</Text>
      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={{ marginTop: 12 }}>
            <Card.Title
              title={item.nome}
              subtitle={`Número: ${item.numero}`}
              left={(props) => <Avatar.Image {...props} source={{ uri: item.imagem }} />}
            />
          </Card>
        )}
      />
    </ScrollView>
  );
}

function EstatisticasScreen() {
  const totalPublico = 3404252;
  const totalJogos = 64;
  const totalGols = 172;
  const totalCartoes = 301;

  const mediaGols = (totalGols / totalJogos).toFixed(2);
  const mediaPublico = Math.round(totalPublico / totalJogos);
  const mediaCartoes = (totalCartoes / totalJogos).toFixed(2);

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Card style={{ marginBottom: 16 }}>
        <Card.Content>
          <Text variant="titleMedium">Total de Gols: {totalGols}</Text>
          <Text>Média de Gols por Jogo: {mediaGols}</Text>
        </Card.Content>
      </Card>
      <Card style={{ marginBottom: 16 }}>
        <Card.Content>
          <Text variant="titleMedium">Total de Público: {totalPublico}</Text>
          <Text>Média de Público por Jogo: {mediaPublico}</Text>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Text variant="titleMedium">Total de Cartões: {totalCartoes}</Text>
          <Text>Média de Cartões por Jogo: {mediaCartoes}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

// App principal
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
          <Tab.Screen
            name="Copa"
            component={CopaScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="soccer" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Estádios"
            component={EstadiosScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="stadium" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Brasil"
            component={BrasilScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="flag" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Estatísticas"
            component={EstatisticasScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="chart-bar" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
