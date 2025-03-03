import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
const ExchangingHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="book" size={100} color="#666" style={styles.icon} /> {/* Open book icon */}
      <Text style={styles.title}>Exchanging History</Text>
      <Text style={styles.description}>No exchanges made yet.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C6EEFF',
  },
  icon: {
    marginBottom: 20, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default ExchangingHistoryScreen;