import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';

import CONSTANTS from '../global_state/constants';
import SearchTab from '../components/Search/SearchTab';

const SearchResults = ({searchValue}) => {
  const [currentActiveTabId, setcurrentActiveTabId] = useState(1);
  const [currentData, setcurrentData] = useState([]);

  const TABS = [
    {
      id: 1,
      tabText: 'Streetwear',
      dataFetchUrl: function(searchValue) {
        return `https://stockx.com/api/browse?&_search=${searchValue}`;
      },
    },
    {
      id: 2,
      tabText: 'Accounts',
    },
  ];

  const handleTabPress = tabId => {
    if (currentActiveTabId !== tabId) {
      setcurrentActiveTabId(tabId);
    }
  };

  const findActiveTabUrl = () => {
    //Find the first tab where the id matches the current active tab id, then call that tabs dataFetchUrl function and return the result
    return TABS.find(tab => tab.id === currentActiveTabId).dataFetchUrl(
      searchValue,
    );
  };

  const extractData = allProducts => {
    let extractedDataProducts = [];

    extractedDataProducts = allProducts.map(product => {
      return {
        id: product.id,
        uuid: product.uuid,
        brand: product.brand,
        imageUrl: product.media.thumbUrl,
        name: product.name,
        title: product.title,
        colorway: product.colorway,
      };
    });
    console.log(extractedDataProducts);
  };

  useEffect(() => {
    // axios.get(findActiveTabUrl()).then(res => extractData(res.data.Products));
  }, [searchValue]);

  return (
    <View>
      <View style={styles.searchSelector}>
        {TABS.map(tabItem => (
          <SearchTab
            key={tabItem.id}
            id={tabItem.id}
            tabText={tabItem.tabText}
            textStyle={styles.text}
            handleTabPress={handleTabPress}
            currentActiveTabId={currentActiveTabId}
            activeTabStyle={styles.activeTabStyle}
          />
        ))}
      </View>
      <View>
        <ScrollView>
          <Text>Hi</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSelector: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    color: CONSTANTS.TEXT_COLOR,
    fontFamily: CONSTANTS.FONT_BOLD,
    padding: 15,
  },
  activeTabStyle: {
    backgroundColor: CONSTANTS.VERY_LIGHT_BACKGROUND,
    borderRadius: 6,
  },
});

export default SearchResults;
