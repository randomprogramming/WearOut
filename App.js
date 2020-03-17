import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CONSTANTS from './global_state/constants';

const App = () => {
  return (
    <View style={styles.main}>
      <Text>Hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: CONSTANTS.MAIN_BACKGROUND,
  },
});

export default App;
