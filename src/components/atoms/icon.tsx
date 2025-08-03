import React, { FC } from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons'



interface IconProps{
 color?:string,
 size?:number,
 name?:string,
 iconFamily:"Ionicons" | "MaterialCommunityIcons" | "MaterialIcons",
 style?: StyleProp<ViewStyle>
}

const Icon: FC<IconProps> = ({ color = 'black', size = 24, name = '', iconFamily, style }) => {
  if (iconFamily === 'Ionicons') {
    return <View style={style}><Ionicons name={name} size={size} color={color} /></View>;
  }
  if (iconFamily === 'MaterialCommunityIcons') {
    return <View style={style}><MaterialCommunityIcons name={name} size={size} color={color} /></View>;
  }
  if (iconFamily === 'MaterialIcons') {
    return <View style={style}><MaterialIcons name={name} size={size} color={color} /></View>;
  }
  return null;
};

export default Icon