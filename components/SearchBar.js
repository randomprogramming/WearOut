import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';

import CONSTANTS from '../global_state/constants';

const SearchBar = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        <Icon name="search" size={32} color={CONSTANTS.ACCENT_COLOR} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search streetwear or people..."
          placeholderTextColor={CONSTANTS.TEXT_COLOR}
          selectionColor={CONSTANTS.ACCENT_COLOR}
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 15,
    marginHorizontal: 25,
    backgroundColor: CONSTANTS.VERY_LIGHT_BACKGROUND,
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 0,
    justifyContent: 'center',
    marginLeft: 4,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    color: CONSTANTS.TEXT_COLOR,
    fontFamily: CONSTANTS.FONT_BOLD,
    fontSize: 16,
    paddingHorizontal: 8,
  },
});

export default SearchBar;
