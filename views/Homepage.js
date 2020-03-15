import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import LogoHeader from '../components/LogoHeader';
import SearchBar from '../components/SearchBar';

export const Homepage = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <LogoHeader />
      </View>
      <View style={styles.contentContainer}>
        <SearchBar />
        <Text>Content Text</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 0,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#141313',
  },
});
