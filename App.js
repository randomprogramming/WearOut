import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS, SCREEN_NAMES } from './global_state/constants';
import Homescreen from './views/Homescreen';
import Search from './views/Search';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName={SCREEN_NAMES.HOME} headerMode="none">
      <Stack.Screen name={SCREEN_NAMES.HOME} component={Homescreen} />
      <Stack.Screen name={SCREEN_NAMES.SEARCH} component={Search} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.MAIN_BACKGROUND,
  },
});

export default App;
