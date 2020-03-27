import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { COLORS, FONTS } from '../../global_state/constants';

const InputField = ({
  placeholderText,
  textChangeHandler,
  isSecure = false,
  keyboardType = 'default',
}) => {
  const [input, setinput] = useState('');

  const handleInput = newInput => {
    setinput(newInput);
  };

  useEffect(() => {
    textChangeHandler(input);
  }, [input, textChangeHandler]);

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder={placeholderText}
        autoCorrect={false}
        selectionColor={COLORS.ACCENT_COLOR}
        value={input}
        keyboardType={keyboardType}
        secureTextEntry={isSecure}
        onChangeText={text => handleInput(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: COLORS.BACKGROUND_DARKER,
    color: COLORS.TEXT_COLOR,
    fontFamily: FONTS.REGULAR,
    fontSize: 16,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default InputField;
