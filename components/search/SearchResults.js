import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { COLORS, SCREEN_NAMES } from '../../global_state/constants';

const SearchResults = ({ route, navigation }) => {
  const [searchResults, setsearchResults] = useState([]);
  const search = useSelector(state => state.search);

  return (
    <View style={styles.main}>
      <ScrollView>
        <View>
          <Text
            onPress={() => {
              navigation.navigate(SCREEN_NAMES.ANOTHER_ACCOUNT_PROFILE, {
                id: 15,
              });
            }}>
            Test
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.MAIN_BACKGROUND,
    flex: 1,
  },
});

export default SearchResults;
