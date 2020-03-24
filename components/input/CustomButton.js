import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FONTS, COLORS } from '../../global_state/constants';

const CustomButton = ({ pressHandler, title, buttonStyle, textStyle }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={pressHandler}>
        <Text style={textStyle ? textStyle : styles.defaultTextStyle}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 7,
    borderColor: COLORS.ACCENT_COLOR,
    borderWidth: 1,
    alignSelf: 'flex-end',
    backgroundColor: COLORS.ACCENT_COLOR,
  },
  defaultTextStyle: {
    fontSize: 16,
    fontFamily: FONTS.BOLD,
    color: COLORS.BACKGROUND_DARKER,
    textTransform: 'uppercase',
  },
});

export default CustomButton;
