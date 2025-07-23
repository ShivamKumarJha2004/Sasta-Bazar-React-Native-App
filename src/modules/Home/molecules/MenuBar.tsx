import { View, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import Animated, { useAnimatedStyle, interpolate, withSpring, useSharedValue, withTiming } from 'react-native-reanimated'
import { menuData } from '../../../../utils/db'
import MenuItem from '../atom/MenuItem'
import LinearGradient from 'react-native-linear-gradient'

const MenuBar = ({ scrollY }: { scrollY: any }) => {
  const [focusIndex, setFocusIndex] = useState(0)
  const { width } = Dimensions.get('window')
  const indicatorPosition = useSharedValue(0)

  const indicatorWidth = useSharedValue(40)
  
  useEffect(() => {
    // Calculate the position for the indicator
    const newPosition = (width - 32) * (focusIndex / menuData.length) + (width - 32) / (menuData.length * 2) - 20
    indicatorPosition.value = withSpring(newPosition, { damping: 15, stiffness: 120 })
    
    // Animate the width of the indicator
    indicatorWidth.value = withTiming(30, { duration: 100 })
    setTimeout(() => {
      indicatorWidth.value = withSpring(40, { damping: 15 })
    }, 100)
  }, [focusIndex, width])
  
  const indicatorStyle = useAnimatedStyle(() => {
    return {
      left: indicatorPosition.value,
      width: indicatorWidth.value
    }
  })
  
  const opacityFaddingStyle = useAnimatedStyle<any>(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 80],
        [1, 0],
        'clamp'
      ),
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [0, 80],
            [0, -20],
            'clamp'
          )
        },
        {
          rotateX: `${interpolate(
            scrollY.value,
            [0, 40],
            [0, -5],
            'clamp'
          )}deg`
        }
      ]
    }
  })

  return (
    <Animated.View style={[styles.container, opacityFaddingStyle]}>
      <SafeAreaView />
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.95)', 'rgba(255, 250, 240, 0.95)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.menuBackground}
      >
        <View style={styles.glowEffect} />
        <View style={styles.flexRow}>
          {menuData.map((item, key) => (
            <MenuItem 
              key={key} 
              item={item} 
              isFocused={focusIndex === key} 
              onSelect={() => setFocusIndex(key)} 
              index={key}
              totalItems={menuData.length}
            />
          ))}
        </View>
        <Animated.View style={[styles.indicator, indicatorStyle]} />
      </LinearGradient>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 75,
    left: 0,
    right: 0,
    zIndex: 100,
    paddingHorizontal: 16,
    //transform: [{ perspective: 1000 }],
  },
  menuBackground: {
    width: '100%',
    paddingVertical: 12,
    
    
    shadowOpacity: 0.15,gi
    shadowRadius: 15,
    elevation: 10,
   
    
    position: 'relative',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    height: 4,
    // backgroundColor: '#FFC201',
    borderRadius: 10,
    marginBottom: 5,
    shadowColor: '#FFC201',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
  glowEffect: {
    position: 'absolute',
    top: -15,
    left: '25%',
    width: '50%',
    height: 30,
    //backgroundColor: 'rgba(255, 194, 1, 0.15)',
    borderRadius: 15,
    transform: [{ scaleX: 2 }],
    opacity: 0.7,
    zIndex: -1,
  }
})

export default MenuBar