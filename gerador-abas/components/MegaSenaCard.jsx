import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function MegaSenaCard({ dezenas }) {
  return (
    <View style={styles.card}>
      <View style={styles.bolasContainer}>
        {dezenas.map((num, index) => (
          <View key={index} style={styles.bola}>
            <Text style={styles.bolaTexto}>{num}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  bolasContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  bola: {
    backgroundColor: '#2e7d32',
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  bolaTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
