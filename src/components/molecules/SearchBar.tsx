import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
// import Icon from '../atoms/Icon'; // Uncomment if you have an Icon atom

const SearchBar = ({ value, onChange }: { value: string; onChange: (text: string) => void }) => (
  <View style={styles.container}>
    {/* <Icon name="search" /> */}
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChange}
      placeholder="Search..."
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f2f6',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    margin: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
  },
});

export default SearchBar; 