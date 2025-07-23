/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import HomeScreen from '@components/pages/HomeScreen';
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Navigation from '@navigation/Navigation';


const App = () => {
  return (
    <Navigation />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 10,
  },
  subGreeting: {
    fontSize: 22,
    color: '#636e72',
  },
});

export default App;
