import { View, StyleSheet, Dimensions, Text } from 'react-native'
import React, { useState } from 'react'
import { menuData } from '../../../../utils/db'
import MenuItem from '../atom/MenuItem'
import Icon from '../atom/../../../components/atoms/icon'
const MenuBar = () => {
  const [focusIndex, setFocusIndex] = useState(0)
  
  
  
  return (
    <View style={styles.container}>
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
      <View style={styles.addressContainer}>
  <Icon name="home" iconFamily='Ionicons' size={24} color="#FF8C00" />

  <View style={styles.textContainer}>
    <Text style={styles.addressTitle}>Home</Text>
    <Text style={styles.addressSubText}>123 Main St, Anytown, USA</Text>
  </View>
</View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    zIndex: 100,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    gap: 10, // for spacing between icon and text (React Native >= 0.71)
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  addressSubText: {
    fontSize: 12,
    color: '#FF8C00',
    marginTop: 2,
    fontWeight: '400',
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(243, 221, 221, 0.8)',
    borderRadius: 20,
    paddingVertical: 8,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  }
})

export default MenuBar