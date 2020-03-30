import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { COLORS, FONTS, SCREEN_NAMES, API } from '../global_state/constants';
import SearchBar from '../components/search/SearchBar';
import SearchResults from '../components/search/SearchResults';

const SearchTab = createMaterialTopTabNavigator();

const Search = () => {
  return (
    <View style={styles.main}>
      <View style={styles.searchBarContainer}>
        <SearchBar placeholderText="Search streetwear or people..." />
      </View>
      <View style={styles.searchContentContainer}>
        <SearchTab.Navigator
          tabBarOptions={{
            style: {
              elevation: 0,
              shadowOpacity: 0,
            },
            labelStyle: { fontFamily: FONTS.BOLD, color: COLORS.TEXT_COLOR },
            indicatorStyle: {
              backgroundColor: COLORS.ACCENT_COLOR,
            },
          }}>
          <SearchTab.Screen
            name={SCREEN_NAMES.STREETWEAR_RESULTS}
            component={SearchResults}
          />
          <SearchTab.Screen
            name={SCREEN_NAMES.PEOPLE_RESULTS}
            component={SearchResults}
          />
        </SearchTab.Navigator>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.MAIN_BACKGROUND,
    flex: 1,
  },
  searchBarContainer: {
    flex: 0,
  },
  searchContentContainer: {
    flex: 1,
  },
});

export default Search;
