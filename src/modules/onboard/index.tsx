import { View, Text, Image, StyleSheet, Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { ResetAndNavigate } from '@navigation/NavigationUtil';

const Splash = () => {
  const scaleAnim = useRef(new Animated.Value(0.7)).current;

  useEffect(()=>{
    const timeOut=setTimeout(()=>{
        ResetAndNavigate("Main_Navigator")
    },3000)

  },[])


  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoWrapper, { transform: [{ scale: scaleAnim }] }]}> 
        <Image source={require('../../../assets/app_logo.png')} style={styles.logo} resizeMode="contain" />
      </Animated.View>
      <Text style={styles.text}>Sasta Bazar</Text>
      <Text style={styles.tagline}>Sabse Sasta, Sabke Liye!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD600',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 12,
    backgroundColor: 'rgba(255,255,255,0.0)',
    borderRadius: 120,
    marginBottom: 24,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#E65100',
    letterSpacing: 1,
    fontFamily: 'System',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 18,
    color: '#a67c00',
    fontStyle: 'italic',
    letterSpacing: 0.5,
  },
});

export default Splash;