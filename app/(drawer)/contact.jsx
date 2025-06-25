import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.subtitle}>We’d love to hear from you!</Text>
      <Text style={styles.info}>📞 +1 (555) 123-4567</Text>
      <Text style={styles.info}>📧 hello@example.com</Text>
      <Text style={styles.info}>🏢 123 Main St, Cityville</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    color: '#777',
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
    color: '#444',
  },
});

export default Contact;
