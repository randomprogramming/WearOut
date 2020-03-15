import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar} from 'react-native';
import axios from 'axios';

import LogoHeader from '../components/LogoHeader';
import SearchBar from '../components/SearchBar';
import CONSTANTS from '../global_state/constants';
import SearchResults from './SearchResults';

export const Homepage = () => {
  const [searchValue, setsearchValue] = useState('');

  const handleInput = newInput => {
    // TODO: Only update searchValue after some time of user not typing, to prevent constant calls to the stockx api
    setsearchValue(newInput);
  };

  const deleteHandler = () => {
    setsearchValue('');
  };

  useEffect(() => {
    // if (searchValue.length !== 0) {
    //   axios
    //     .get(`https://stockx.com/api/browse?&_search=${searchValue}`)
    //     .then(res => console.log(res.data.Products));
    // }
  }, [searchValue]);

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={CONSTANTS.BLACK_BACKGROUND} />
      <View style={styles.headerContainer}>
        <LogoHeader />
      </View>
      <View style={styles.contentContainer}>
        <View>
          <SearchBar
            inputHandler={handleInput}
            value={searchValue}
            deleteHandler={deleteHandler}
          />
        </View>
        <View>
          {searchValue.length === 0 ? (
            <Text style={{color: 'white'}}>Content Text</Text>
          ) : (
            <SearchResults searchValue={searchValue} />
          )}
        </View>
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
    backgroundColor: CONSTANTS.LIGHT_BACKGROUND,
  },
});
