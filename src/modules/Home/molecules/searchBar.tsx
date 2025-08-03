import { View, Text, SafeAreaView, StyleSheet, Pressable, TextInput, Animated } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import Icon from '@components/atoms/icon'
import { Colors } from '../../../../utils/Constants'

const Searchbar = () => {
  const [focused, setFocused] = useState(false);
  const [searchText, setSearchText] = useState('');
  const animatedWidth = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (focused) {
      Animated.parallel([
        Animated.timing(animatedWidth, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false
        }),
        Animated.timing(animatedOpacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false
        })
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(animatedWidth, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false
        }),
        Animated.timing(animatedOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false
        })
      ]).start();
    }
  }, [focused]);

  const inputWidth = animatedWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ['85%', '100%']
  });

  return (
    <>
    <SafeAreaView/>
    <View style={styles.container}>
      <Animated.View style={[styles.searchContainer, focused && styles.searchContainerFocused, { width: inputWidth }]}>
        <Pressable 
          style={styles.innerContainer}
          onPress={() => !focused && setFocused(true)}
          android_ripple={{ color: '#FF5722', borderless: false, radius: 100 }}
        >
          <View style={styles.searchIconContainer}>
            <Icon 
              name='search' 
              iconFamily='Ionicons' 
              color={focused ? '#FF5722' : '#757575'} 
              size={20}
            />
          </View>
          
          {!focused ? (
            <View style={styles.textContainer}>
              <Text style={styles.searchText}>Search Products ..</Text>
                
            </View>
          ) : (
            <TextInput
              style={styles.searchInput}
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Search products, services..."
              placeholderTextColor="#9E9E9E"
              autoFocus
            />
          )}
          
          {focused && (
            <Animated.View style={[styles.cancelButtonContainer, { opacity: animatedOpacity }]}>
              <Pressable 
                style={styles.cancelButton} 
                onPress={() => {
                  setFocused(false);
                  setSearchText('');
                }}
              >
                <Icon name='close-circle' iconFamily='Ionicons' color='#FF5722' size={18}/>
              </Pressable>
            </Animated.View>
          )}
        </Pressable>
      </Animated.View>
    </View>
    
    </>
  )
}
const styles= StyleSheet.create({
    container:{
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginTop: 5,
        alignItems: 'center'
    },
    searchContainer:{
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        height: 56,
        alignSelf: 'center',
        overflow: 'hidden'
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 15,
        height: '100%',
        width: '100%'
    },
    searchContainerFocused: {
        borderColor: '#FF5722',
        backgroundColor: '#FFFFFF',
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5
    },
    searchIconContainer: {
        marginRight: 10,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchText: {
        color: '#757575',
        fontSize: 16,
        marginRight: 5,
        fontFamily: 'System',
    },
    rollingText: {
        color: '#FF5722',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'System',
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#212121',
        padding: 0,
        fontFamily: 'System',
        height: '100%'
    },
    cancelButtonContainer: {
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancelButton: {
        padding: 5
    }
})

export default Searchbar