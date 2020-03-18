import React from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import { COLORS, FONTS, ACTIONS } from '../../global_state/constants';

const SearchBar = ({ placeholderText }) => {
  const dispatch = useDispatch();
  const currentInput = useSelector(state => state.search);

  const onInputChange = newInput => {
    dispatch({ type: ACTIONS.SET_SEARCH_VALUE, payload: newInput });
  };

  const handleDelete = () => {
    dispatch({ type: ACTIONS.SET_SEARCH_VALUE, payload: '' });
  };

  const handleCancel = () => {
    dispatch({ type: ACTIONS.SET_SEARCH_VALUE, payload: '' });
    Keyboard.dismiss();
  };

  return (
    <View style={styles.main}>
      <View>
        <AntDesignIcon name="search1" size={25} color={COLORS.TEXT_COLOR} />
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder={placeholderText}
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
            marginRight={-7}
            style={
              // Hide the button if there is no text
              {
                display: currentInput.length === 0 ? 'none' : 'flex',
              }
            }
            onPress={e => {
              handleDelete();
            }}
          />
        </View>
      </View>
      <View>
        {/* TODO: Hide the cancel button if user isn't typing, and give the search bar a animation for that */}
        <Text
          style={styles.cancelButton}
          onPress={e => {
            handleCancel();
          }}>
          Cancel
        </Text>
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
  searchBarInput: {
    flex: 1,
    paddingVertical: 3,
    paddingHorizontal: 7,
    color: COLORS.TEXT_COLOR,
    fontFamily: FONTS.REGULAR,
    fontSize: 16,
  },
  cancelButton: {
    fontSize: 16,
    color: COLORS.TEXT_COLOR,
    fontFamily: FONTS.REGULAR,
  },
});

export default SearchBar;
