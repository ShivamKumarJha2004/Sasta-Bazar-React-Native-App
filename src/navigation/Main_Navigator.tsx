import { View, Text, Platform } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Colors } from '../../utils/Constants';
import Home from '@modules/Home';
import Categories from '@modules/Categories';
import Account from '@modules/account';
import Cart from '@modules/cart';
import { AccountIcon, CartIcon, CategoryIcon, HomeIcon } from './TabIcons';

const Tab=createBottomTabNavigator();

const Main_Navigator = () => {
 
 const count=0
  return (
    <Tab.Navigator 
    screenOptions={{
        headerShown:false,
        tabBarHideOnKeyboard:true,
        tabBarActiveTintColor:'#FF8C00',
        tabBarInactiveTintColor:'#666',
        lazy:true,

        tabBarStyle:{
            paddingTop: Platform.OS === 'android' ? 0 : 10,
            height: 65,
            borderTopWidth: 0,
            elevation: 12,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            paddingBottom: 10
        },
        tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
            paddingBottom: 5
        }
    }}
    >
        <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon:({
            focused,color,size
          })=>(
            <HomeIcon focused={focused} color={color} size={size}/>
          )
        }}

        />
         <Tab.Screen
        name='Categories'
        component={Categories}
        options={{
          tabBarIcon:({
            focused,color,size
          })=>(
            <CategoryIcon focused={focused} color={color} size={size}/>
          )
        }}
        />
        <Tab.Screen
        name='Account'
        component={Account}
        options={{
          tabBarIcon:({
            focused,color,size
          })=>(
            <AccountIcon focused={focused} color={color} size={size}/>
          )
        }}

        />
         <Tab.Screen
        name='Cart'
        component={Cart}
        options={{
          tabBarIcon:({
            focused,color,size
          })=>(
            <CartIcon focused={focused} color={color} size={size}/>
          ),
          tabBarBadge: count > 0 ? count : undefined,
          tabBarBadgeStyle: {
            minWidth: 20,
            height: 20,
            borderRadius: 10,
            fontSize: 12,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FF4500',
            color: 'white',
            paddingHorizontal: 4,
            fontWeight: 'bold',
            transform: [{translateY: -5}, {translateX: 5}]
          }
        }}  

        />


    </Tab.Navigator>
  )
}

export default Main_Navigator