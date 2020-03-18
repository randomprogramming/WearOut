import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const SearchResults = () => {
  // const [state, dispatch] = useReducer(searchReducer);
  const search = useSelector(state => state.search);
  return (
    <View>
      <Text>Results</Text>
      <Text>{search}</Text>
    </View>
  );
};

export default SearchResults;
