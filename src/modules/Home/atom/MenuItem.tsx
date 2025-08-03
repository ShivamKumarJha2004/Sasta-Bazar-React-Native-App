import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

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

const MenuItem = ({ item, isFocused, onSelect }: MenuItemProps) => {

  return (
    <TouchableOpacity 
      style={[styles.container, isFocused && styles.focused]}
      onPress={onSelect}
      activeOpacity={0.8}
    >
      <View style={styles.contentContainer}>
        <View style={[styles.iconContainer, isFocused && styles.focusedIconContainer]}>
          <Image 
            source={item.iconUri} 
            style={[styles.icon, isFocused && styles.focusedIcon]} 
          />
        </View>
      </View>
      
      <Text style={[styles.text, isFocused && styles.focusedText]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 6,
    borderRadius: 12,
    marginHorizontal: 2,
    backgroundColor: '#FFFFFF',
    width: '22%',
  },
  contentContainer: {
    alignItems: 'center',
  },
  focused: {
    backgroundColor: 'rgba(255, 140, 0, 0.08)',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: '#F5F5F5',
  },
  focusedIconContainer: {
    backgroundColor: '#FFF3E0',
    borderWidth: 1,
    borderColor: '#FF8C00',
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  focusedIcon: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    color: '#444',
    textAlign: 'center',
    marginTop: 4,
  },
  focusedText: {
    color: '#FF8C00',
    fontWeight: 'bold',
  },
});

export default MenuItem;