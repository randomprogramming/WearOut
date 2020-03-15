import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import CONSTANTS from '../global_state/constants';

const SearchBar = () => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder="Search streetwear or people..."
        placeholderTextColor={CONSTANTS.TEXT_COLOR}
        selectionColor={CONSTANTS.ACCENT_COLOR}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 15,
    marginHorizontal: 25,
    backgroundColor: CONSTANTS.VERY_LIGHT_BACKGROUND,
  },
  input: {
    color: CONSTANTS.TEXT_COLOR,
    fontFamily: CONSTANTS.FONT_BOLD,
    fontSize: 16,
    paddingHorizontal: 8,
  },
});

export default SearchBar;
