import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={false} onValueChange={() => {}} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Notifications</Text>
        <Switch value={true} onValueChange={() => {}} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Location Access</Text>
        <Switch value={true} onValueChange={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#222',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  label: {
    fontSize: 16,
    color: '#444',
  },
});

export default Settings;
