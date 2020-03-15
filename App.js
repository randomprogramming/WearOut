import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {BACKGROUND_COLOR_DARK} from './global_state/constants';
import SearchBar from './components/SearchBar';
import {Homepage} from './views/Homepage';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* If the user is authenticated in the redux store, show the homepage, else show the
       login/register page*/}
      <View style={styles.main}>
        <Homepage />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
});

export default App;
