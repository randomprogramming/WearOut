import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CONSTANTS from '../global_state/constants';
import SearchTab from '../components/SearchTab';

const SearchResults = () => {
  const [currentActiveTabId, setcurrentActiveTabId] = useState(1);

  const TABS = [
    {
      id: 1,
      tabText: 'Streetwear',
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
      <Text>Hi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSelector: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // marginVertical: 15,
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
