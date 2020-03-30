import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { COLORS, SCREEN_NAMES, API } from '../../global_state/constants';

const SearchResults = ({ route, navigation }) => {
  const [searchResults, setsearchResults] = useState([]);
  const [redirectionPath, setredirectionPath] = useState('');
  const [searchUrl, setsearchUrl] = useState('');
  const search = useSelector(state => state.search);

  useEffect(() => {
    // console.log(route.params.searchUrl);
    // Based on the name of the route, the navigation url to which the onPress function leads is different
    switch (route.name) {
      case SCREEN_NAMES.STREETWEAR_RESULTS:
        setredirectionPath(SCREEN_NAMES.STREETWEAR_PAGE);
        setsearchUrl(API.searchStreetwear);
        break;
      case SCREEN_NAMES.PEOPLE_RESULTS:
        setredirectionPath(SCREEN_NAMES.ANOTHER_ACCOUNT_PROFILE);
        setsearchUrl(API.searchPeople);
        break;
      default:
        setredirectionPath('error');
    }
  }, []);

  useEffect(() => {
    //whenever the search value changes, we have to search for the newly entered input
  }, [search]);

  return (
    <View style={styles.main}>
      <ScrollView>
        <View>
          <Text
            onPress={() => {
              navigation.push(redirectionPath, {
                id: 15,
              });
            }}>
            Test
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.MAIN_BACKGROUND,
    flex: 1,
  },
});

export default SearchResults;
