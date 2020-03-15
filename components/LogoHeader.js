import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import CONSTANTS from '../global_state/constants.js';

const LogoHeader = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.logo}>LOGO</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: CONSTANTS.BLACK_BACKGROUND,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 7,
    borderBottomColor: CONSTANTS.ACCENT_COLOR,
    borderBottomWidth: 1,
  },
  logo: {
    color: CONSTANTS.ACCENT_COLOR,
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
  },
});

export default LogoHeader;
