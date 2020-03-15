import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar} from 'react-native';
import LogoHeader from '../components/LogoHeader';
import SearchBar from '../components/SearchBar';
import CONSTANTS from '../global_state/constants';

export const Homepage = () => {
  const [searchValue, setsearchValue] = useState('');

  const handleInput = newInput => {
    setsearchValue(newInput);
  };

  const deleteHandler = () => {
    setsearchValue('');
  };

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
            <Text style={{color: 'white'}}>search Text</Text>
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
