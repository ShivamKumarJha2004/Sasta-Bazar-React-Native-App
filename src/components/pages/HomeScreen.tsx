import React, { useState } from 'react';
import { View, Text } from 'react-native';
import HomeTemplate from '../templates/HomeTemplate';

const HomeScreen = () => {
  const [search, setSearch] = useState('');

  return (
    <HomeTemplate
      title="Home"
      onBack={() => {}}
      searchValue={search}
      onSearchChange={setSearch}
    >
      <View>
        <Text style={{ fontSize: 18, color: '#636e72' }}>
          Welcome to Atomic Design Home Page!
        </Text>
      </View>
    </HomeTemplate>
  );
};

export default HomeScreen; 