import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      {/* If the user is authenticated in the redux store, show the homepage, else show the
       login/register page*/}
      <View>
        <Text style={styles.text}>Hello World, HELLO WORLD!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontFamily: 'Montserrat-Regular',
  },
});

export default App;
