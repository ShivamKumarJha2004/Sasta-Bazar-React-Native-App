import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MenuBar from './molecules/MenuBar';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming, Easing } from 'react-native-reanimated';
import Searchbar from '../Home/molecules/searchBar';
import MainList from '@components/templates/mainList';

const Home = () => {
  const opacity = useSharedValue(0)
  
  const fadeInStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value
    }
  })

  
    
   
  return (
    <View style={styles.container}>
      <View style={styles.menuBarContainer}>
        <MenuBar />
        <Searchbar />
        <MainList  />
      </View>
      
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  menuBarContainer: {
    width: '100%',
    paddingHorizontal: 10,
    zIndex: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e65100',
    marginBottom: 32,
    letterSpacing: 1,
  },
  card: {
    backgroundColor: '#fff',
    paddingVertical: 32,
    paddingHorizontal: 40,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
    width: '90%',
    maxWidth: 400,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#a67c00',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  todoStatus: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 100,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#e65100',
    fontSize: 16,
  },
  errorContainer: {
    position: 'absolute',
    bottom: 100,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 220, 220, 0.9)',
    alignItems: 'center',
    width: '90%',
    maxWidth: 400,
  },
});

export default Home;