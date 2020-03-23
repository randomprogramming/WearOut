import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { COLORS } from '../global_state/constants';

const UserFeed = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text>Home screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.MAIN_BACKGROUND,
    flex: 1,
  },
});

export default UserFeed;
