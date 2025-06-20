import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Home 👋</Text>
      <Text style={styles.subtext}>This is your main dashboard.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e1e1e',
    marginBottom: 12,
  },
  subtext: {
    fontSize: 16,
    color: '#666',
  },
});

export default Index;
