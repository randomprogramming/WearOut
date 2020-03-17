import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from './global_state/constants';

const App = () => {
  return (
    <View style={styles.main}>
      <Text>Hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.MAIN_BACKGROUND,
  },
});

export default App;
