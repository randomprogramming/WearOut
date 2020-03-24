import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { COLORS, FONTS } from '../../global_state/constants';

const InputField = ({ placeholderText }) => {
  const [input, setinput] = useState('');

  const handleInput = newInput => {
    setinput(newInput);
  };

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder={placeholderText}
        autoCorrect={false}
        selectionColor={COLORS.ACCENT_COLOR}
        value={input}
        onChange={handleInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: COLORS.MAIN_BACKGROUND,
    color: COLORS.TEXT_COLOR,
    fontFamily: FONTS.REGULAR,
    fontSize: 16,
    paddingHorizontal: 10,
  },
});

export default InputField;
