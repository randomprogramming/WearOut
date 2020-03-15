import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const SearchTab = ({
  id,
  tabText,
  textStyle,
  handleTabPress,
  currentActiveTabId,
  activeTabStyle,
}) => {
  return (
    <TouchableHighlight
      underlayColor="transparent"
      onPress={e => handleTabPress(id)}>
      <View style={currentActiveTabId === id ? activeTabStyle : {}}>
        <Text style={textStyle}>{tabText}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default SearchTab;
