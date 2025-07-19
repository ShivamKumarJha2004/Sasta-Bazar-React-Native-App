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
        tabBarActiveTintColor:Colors.active,
        tabBarInactiveTintColor:Colors.inactive,
        lazy:true,

        tabBarStyle:{
            paddingTop: Platform.OS === 'android' ? 0 : 10
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
            backgroundColor: 'red', // or your preferred color
            color: 'white',         // for the text
            paddingHorizontal: 4,   // for extra space for double digits
          }
        }}  

        />


    </Tab.Navigator>
  )
}

export default Main_Navigator