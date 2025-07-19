import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../atoms/icon';

const Header = ({ title, onBack }) => (
  <View style={styles.header}>
    <Button title="Back" onPress={onBack} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#2d3436',
  },
});

export default Header; 