import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring, 
  withTiming,
  interpolate,
  Extrapolate,
  withRepeat,
  withSequence
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

interface MenuItemProps {
  item: {
    name: string;
    iconUri: any;
  };
  isFocused: boolean;
  onSelect: () => void;
  index: number;
  totalItems: number;
}

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const MenuItem = ({ item, isFocused, onSelect, index, totalItems }: MenuItemProps) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0.9);
  const translateY = useSharedValue(0);
  const gradientOpacity = useSharedValue(0);
  const borderWidth = useSharedValue(0);
  const pulseScale = useSharedValue(1);
  
  useEffect(() => {
    if (isFocused) {
      pulseScale.value = withRepeat(
        withSequence(
          withTiming(1.2, { duration: 800 }),
          withTiming(1, { duration: 800 })
        ),
        -1,
        true
      );
      scale.value = withSpring(1.1, { damping: 10, stiffness: 200 });
      opacity.value = withTiming(1, { duration: 200 });
      translateY.value = withSpring(-5, { damping: 10 });
      gradientOpacity.value = withTiming(1, { duration: 400 });
      borderWidth.value = withTiming(2, { duration: 250 });
    } else {
      scale.value = withSpring(1, { damping: 12, stiffness: 250 });
      opacity.value = withTiming(0.9, { duration: 250 });
      translateY.value = withSpring(0, { damping: 10 });
      gradientOpacity.value = withTiming(0, { duration: 300 });
      borderWidth.value = withTiming(0, { duration: 200 });
      pulseScale.value = 1;
    }

    return () => {
      scale.value = 1;
      opacity.value = 0.9;
      translateY.value = 0;
      gradientOpacity.value = 0;
      borderWidth.value = 0;
      pulseScale.value = 1;
    };
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { translateY: translateY.value }
      ],
      opacity: opacity.value
    };
  });

  const gradientAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: gradientOpacity.value,
      borderWidth: borderWidth.value,
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { 
          scale: interpolate(
            scale.value,
            [1, 1.15],
            [1, 1.05],
            Extrapolate.CLAMP
          ) 
        }
      ],
      opacity: interpolate(
        opacity.value,
        [0.8, 1],
        [0.8, 1],
        Extrapolate.CLAMP
      )
    };
  });

  return (
    <AnimatedTouchable 
      style={[styles.container, isFocused && styles.focused]}
      onPress={onSelect}
      activeOpacity={0.8}
    >
      <Animated.View style={[animatedStyle, styles.contentContainer]}>
        <AnimatedLinearGradient
          colors={isFocused ? ['#FFD700', '#FF8C00'] : ['#FFFFFF', '#FAFAFA']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.iconContainer, gradientAnimatedStyle]}
        >
          <Image 
            source={item.iconUri} 
            style={[styles.icon, isFocused && styles.focusedIcon]} 
          />
        </AnimatedLinearGradient>
        
        {isFocused && (
          <View style={styles.activePulse}>
            <Animated.View 
              style={[
                styles.pulse, 
                { 
                  opacity: gradientOpacity,
                  transform: [{ scale: pulseScale }]
                }
              ]} 
            />
          </View>
        )}
      </Animated.View>
      
      <Animated.Text style={[styles.text, isFocused && styles.focusedText, textAnimatedStyle]}>
        {item.name}
      </Animated.Text>
      
      {isFocused && <View style={styles.glowEffect} />}
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 4,
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  contentContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  focused: {
    backgroundColor: 'rgba(99, 102, 241, 0.08)',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    borderColor: 'rgba(99, 102, 241, 0.7)',
    backgroundColor: '#FFFFFF',
  },
  icon: {
    width: 36,
    height: 36,
    tintColor: '#4B5563',
    resizeMode: 'contain',
  },
  focusedIcon: {
    tintColor: '#FFFFFF',
    width: 38,
    height: 38,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
    color: '#444',
    letterSpacing: 0.5,
    marginTop: 4,
  },
  focusedText: {
    color: '#FF8C00',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    textShadowColor: 'rgba(255, 215, 0, 0.4)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  activePulse: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
  },
  pulse: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FF8C00',
    borderWidth: 2.5,
    borderColor: '#FFFFFF',
    shadowColor: '#FF8C00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  glowEffect: {
    position: 'absolute',
    bottom: 6,
    width: 48,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 140, 0, 0.6)',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 3,
  },
});

export default MenuItem;