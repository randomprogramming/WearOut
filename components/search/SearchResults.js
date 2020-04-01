import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { COLORS, SCREEN_NAMES, API, FONTS } from '../../global_state/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchResults = ({ route, navigation }) => {
  const [searchResults, setsearchResults] = useState([]);
  const [redirectionPath, setredirectionPath] = useState('');
  const search = useSelector(state => state.search);

  const extractData = data => {
    let allData = [];
    if (data.Products) {
      data.Products.map(item => {
        let itemAlreadyAdded = false;
        //check every product in allData, and if a id matches to the id of the current item, don't add it
        //to alldata, to prevent duplicates.
        for (let product of allData) {
          if (product.id === item.id) {
            itemAlreadyAdded = true;
          }
        }
        if (!itemAlreadyAdded) {
          allData.push({
            id: item.id,
            brand: item.brand,
            title: item.title,
            image: item.media.thumbUrl,
            smallImage: false,
          });
        }
      });
    } else {
      data.map(account => {
        allData.push({
          id: account.id,
          username: account.username,
          accountDescription: account.description,
          image: account.linkToProfilePicture,
          smallImage: true,
        });
      });
    }
    setsearchResults(allData);
  };

  const fetchSearchResults = () => {
    if (search.length !== 0) {
      axios
        .get(
          redirectionPath === SCREEN_NAMES.STREETWEAR_PAGE
            ? API.searchStreetwear(search)
            : // TODO: Change this to my server url
              API.searchPeople(search),
        )
        .then(res => extractData(res.data));
    } else {
      setsearchResults([]);
    }
  };

  useEffect(() => {
    // console.log(route.params.searchUrl);
    // Based on the name of the route, the navigation url to which the onPress function leads is different
    switch (route.name) {
      case SCREEN_NAMES.STREETWEAR_RESULTS:
        setredirectionPath(SCREEN_NAMES.STREETWEAR_PAGE);
        break;
      case SCREEN_NAMES.PEOPLE_RESULTS:
        setredirectionPath(SCREEN_NAMES.ANOTHER_ACCOUNT_PROFILE);
        break;
      default:
        setredirectionPath('error');
    }
    // when the component mounts, we need to fetch search results
    fetchSearchResults();
  }, []);

  useEffect(() => {
    //whenever the search value changes, we have to search for the newly entered input

    fetchSearchResults();
  }, [search]);

  return (
    <View style={styles.main}>
      <ScrollView>
        {searchResults.map(item => {
          return item.smallImage ? (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.push(redirectionPath, { id: item.id })}>
              <View style={styles.smallMainResultContainer}>
                <View style={styles.imageContainer}>
                  <View>
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      style={styles.smallImage}
                    />
                  </View>
                </View>
                <View style={styles.titleTextContainer}>
                  <Text style={styles.titleText}>{item.username}</Text>
                  <Text style={styles.accountDescriptiontext}>
                    {item.accountDescription}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.push(redirectionPath, { id: item.id })}>
              <View style={styles.mainResultContainer}>
                <View style={styles.imageContainer}>
                  <View>
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      style={styles.image}
                    />
                  </View>
                  <View>
                    <Text style={styles.brandText}>{item.brand}</Text>
                  </View>
                </View>
                <View style={styles.titleTextContainer}>
                  <Text style={styles.titleText}>{item.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
        {/* <Text
            onPress={() => {
              navigation.push(redirectionPath, {
                id: 15,
              });
            }}>
            Test
          </Text> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.MAIN_BACKGROUND,
    flex: 1,
  },
  image: {
    width: 98,
    height: 70,
  },
  smallImage: {
    width: 60,
    height: 60,
    aspectRatio: 1,
    borderRadius: 30,
  },
  mainResultContainer: {
    flexDirection: 'row',
    height: 100,
    borderBottomColor: COLORS.BACKGROUND_DARKER,
    borderBottomWidth: 1,
    marginTop: 10,
  },
  smallMainResultContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    borderBottomColor: COLORS.BACKGROUND_DARKER,
    borderBottomWidth: 1,
    marginTop: 10,
  },
  accountDescriptiontext: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.TEXT_COLOR,
    fontSize: 13,
  },
  imageContainer: {
    marginLeft: 15,
  },
  brandText: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.TEXT_COLOR,
    alignSelf: 'center',
  },
  titleTextContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  titleText: {
    fontFamily: FONTS.BOLD,
    color: COLORS.TEXT_COLOR,
  },
});

export default SearchResults;
