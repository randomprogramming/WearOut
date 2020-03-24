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
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 7,
    borderColor: COLORS.ACCENT_COLOR,
    borderWidth: 1,
    alignSelf: 'center',
    backgroundColor: COLORS.ACCENT_COLOR,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  defaultTextStyle: {
    fontSize: 16,
    fontFamily: FONTS.BOLD,
    color: COLORS.MAIN_BACKGROUND,
    textTransform: 'uppercase',
  },
});

export default CustomButton;
