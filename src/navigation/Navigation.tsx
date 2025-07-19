import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '@modules/onboard';
import { navigationRef } from './NavigationUtil';
import Home from '@modules/Home';
import Main_Navigator from './Main_Navigator';

const Stack=createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
      initialRouteName='Splash'>
        
       <Stack.Screen name='Splash' component={Splash}/>
       { <Stack.Screen name='Main_Navigator' component={Main_Navigator}/> }
       


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation