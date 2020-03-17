import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import { COLORS, FONTS } from '../../global_state/constants';

const SearchBar = ({ handleInputChange }) => {
  const [currentInput, setcurrentInput] = useState('');

  const onInputChange = newText => {
    setcurrentInput(newText);
  };

  const handleDelete = () => {
    setcurrentInput('');
  };

  useEffect(() => {
    // When the input changes, we also need to tell the parent component that the input changed
    handleInputChange(currentInput);
  }, [currentInput]);

  return (
    <View style={styles.main}>
      <View>
        <AntDesignIcon name="search1" size={25} color={COLORS.TEXT_COLOR} />
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBarInput}
          autoCorrect={false}
          selectionColor={COLORS.ACCENT_COLOR}
          onChangeText={text => onInputChange(text)}
          value={currentInput}
        />
        <View style={styles.deleteIconcontainer}>
          <AntDesignIcon.Button
            name="closecircle"
            size={15}
            color={COLORS.TEXT_COLOR}
            backgroundColor="transparent"
            underlayColor="transparent"
            style={
              (styles.deleteIcon,
              // Hide the button if there is no text
              { display: currentInput.length === 0 ? 'none' : 'flex' })
            }
            onPress={e => {
              handleDelete();
            }}
          />
        </View>
      </View>
      <View>
        <Text>Cancel</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.BACKGROUND_DARKER,
    marginHorizontal: 7,
    borderRadius: 7,
  },
  deleteIconcontainer: {
    alignSelf: 'center',
  },
  deleteIcon: {
    marginRight: -7,
    display: 'none',
  },
  searchBarInput: {
    flex: 1,
    paddingVertical: 3,
    paddingHorizontal: 7,
    color: COLORS.TEXT_COLOR,
    fontFamily: FONTS.REGULAR,
  },
});

export default SearchBar;
