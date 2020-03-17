import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { COLORS } from '../global_state/constants';
import SearchBar from '../components/search/SearchBar';

const Search = () => {
  const [searchInput, setsearchInput] = useState('');

  const handleSearchInputChange = newInput => {
    setsearchInput(newInput);
  };

  return (
    <View style={styles.main}>
      <View>
        <SearchBar
          handleInputChange={handleSearchInputChange}
          placeholderText="Search streetwear or accounts"
        />
      </View>
      <Text>{searchInput}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.MAIN_BACKGROUND,
    flex: 1,
  },
});

export default Search;
