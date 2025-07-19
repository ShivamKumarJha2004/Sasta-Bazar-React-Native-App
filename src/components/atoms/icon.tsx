import React, { FC } from 'react';
import { View, Text } from 'react-native'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons'



interface IconProps{
 color?:string,
 size?:number,
 name?:string,
 iconFamily:"Ionicons" | "MaterialCommunityIcons" | "MaterialIcons"
  
}

const icon: FC<IconProps> = ({ color = 'black', size = 24, name = '', iconFamily }) => {
  if (iconFamily === 'Ionicons') {
    return <Ionicons name={name} size={size} color={color} />;
  }
  if (iconFamily === 'MaterialCommunityIcons') {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
  }
  if (iconFamily === 'MaterialIcons') {
    return <MaterialIcons name={name} size={size} color={color} />;
  }
  return null;
};

export default icon 