import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MenuBar from './molecules/MenuBar';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming, Easing } from 'react-native-reanimated';
import { screenHeight } from '../../../utils/Constants';

const Home = () => {
  const insets=useSafeAreaInsets()
  const scrollYGlobally=useSharedValue(0)
  const opacity = useSharedValue(0)
  const scale = useSharedValue(0.8)

  const moveStyle = useAnimatedStyle(() => {
    const translateY=interpolate(
      scrollYGlobally.value,
      [0,100],
      [0,-100],
      'clamp'
    )
    return {
      transform:[
        {translateY:translateY},
        {scale: interpolate(scrollYGlobally.value, [0, 50], [1, 0.95], 'clamp')}
      ],
      opacity: interpolate(scrollYGlobally.value, [0, 100], [1, 0.8], 'clamp')
    }
  })
  
  const fadeInStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        {scale: scale.value}
      ]
    }
  })

  const [todoData, setTodoData] = useState({
    title: '',
    completed: false,
    userId: 0,
    id: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string|null>(null);
  
    const getData=async()=>{
      try{
        const resposne=await axios.get('https://jsonplaceholder.typicode.com/todos/2')
        setTodoData(resposne.data)
        setLoading(false);
        setError(null);
      }catch(error){
        setError(error instanceof Error ? error.message :'An error occurred')
      }
    }
    

   useEffect(() => {
    getData()
    
    // Animate elements when component mounts
    opacity.value = withTiming(1, { duration: 1000 })
    scale.value = withSpring(1, { damping: 12, stiffness: 90 })
    
    // Simulate scroll for animation demo
    setTimeout(() => {
      scrollYGlobally.value = withTiming(50, { duration: 1500, easing: Easing.out(Easing.exp) })
    }, 2000)
   }, []);
  
  return (
    <View style={styles.container}>
      <Animated.View style={[moveStyle, styles.menuBarContainer]}>
        <MenuBar scrollY={scrollYGlobally}/>
      </Animated.View>
      
      <Animated.View style={[moveStyle,  {height:screenHeight}]}>
       
      </Animated.View>
      
      {loading ? (
        <Animated.View style={[styles.loadingContainer, fadeInStyle]}>
          <ActivityIndicator size="large" color="#e65100" />
          <Text style={styles.loadingText}>Loading...</Text>
        </Animated.View>
      ) : error ? (
        <Animated.View style={[styles.errorContainer, fadeInStyle]}>
          <Text style={styles.errorText}>{error}</Text>
        </Animated.View>
      ) : (
        <Animated.View style={[styles.card, fadeInStyle]}>
          <Text style={styles.todoTitle}>{todoData.title}</Text>
          <Text style={styles.todoStatus}>
            Status: {todoData.completed ? 'Completed' : 'Pending'}
          </Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fffde7',
    alignItems: 'center',
    // paddingBottom: 24,
    // paddingHorizontal: 10,
  },
  menuBarContainer: {
    width: '100%',
    paddingHorizontal: 10,
    zIndex: 10,
    marginTop: 10,
    shadowColor: '#FFC201',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
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