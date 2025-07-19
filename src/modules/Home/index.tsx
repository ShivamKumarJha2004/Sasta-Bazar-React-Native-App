import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/reduxHook';
import { getHomeContent } from './api/actions';

const Home = () => {
 const dispatch=useAppDispatch()
 const {data,loading,error}=useAppSelector(state=>state.home)
 
 
 
 useEffect(()=>{
  dispatch(getHomeContent(1))
 })
 
  return (
    <View style={styles.container}>
      {JSON.stringify(data)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffde7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e65100',
    marginBottom: 32,
    letterSpacing: 1,
  },
  card: {
    backgroundColor: '#fffde7',
    paddingVertical: 32,
    paddingHorizontal: 40,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#a67c00',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default Home;