import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../organisms/Header';
import SearchBar from '../molecules/SearchBar';

const HomeTemplate = ({ onBack, title, searchValue, onSearchChange, children }) => (
  <View style={styles.container}>
    <Header title={title} onBack={onBack} />
    <SearchBar value={searchValue} onChange={onSearchChange} />
    <View style={styles.content}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default HomeTemplate; 