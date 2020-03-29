import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS, FONTS, SCREEN_NAMES } from '../global_state/constants';
import SearchBar from '../components/search/SearchBar';
import SearchResults from '../components/search/SearchResults';
import AccountProfile from './AccountProfile';

const SearchTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const Search = () => {
  const Temp = () => {
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
  return (
    <View style={styles.main}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="default" component={Temp} />
        <Stack.Screen
          name={SCREEN_NAMES.ANOTHER_PERSON_ACCOUNT_PROFILE}
          component={AccountProfile}
        />
      </Stack.Navigator>
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
