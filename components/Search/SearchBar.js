import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';

import CONSTANTS from '../../global_state/constants';

const SearchBar = ({inputHandler, value, deleteHandler}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        <FeatherIcon name="search" size={32} color={CONSTANTS.ACCENT_COLOR} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search streetwear or accounts"
          placeholderTextColor={CONSTANTS.TEXT_COLOR}
          selectionColor={CONSTANTS.ACCENT_COLOR}
          style={styles.input}
          value={value}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={newText => {
            inputHandler(newText);
          }}
        />
        {/* If the value of the field is not zero, it means that the user is typing something.
        In that case, we want to show the delete button to delete the whole text */}
      </View>
      {value.length !== 0 && (
        <View style={styles.iconContainer}>
          {/* TODO: Remove the opacity effect on button press */}
          <MaterialIcon.Button
            backgroundColor="transparent"
            iconStyle={{marginRight: 1, padding: 2}}
            name="cancel"
            color={CONSTANTS.ACCENT_COLOR}
            onPress={e => {
              deleteHandler();
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 10,
    marginHorizontal: 25,
    backgroundColor: CONSTANTS.VERY_LIGHT_BACKGROUND,
    flexDirection: 'row',
    borderRadius: 6,
  },
  iconContainer: {
    flex: 0,
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    color: CONSTANTS.TEXT_COLOR,
    fontFamily: CONSTANTS.FONT_BOLD,
    fontSize: 16,
  },
});

export default SearchBar;
