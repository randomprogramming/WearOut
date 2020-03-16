import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CONSTANTS from '../../global_state/constants';

const Result = ({title, brand, description, imageUrl, hasLargePicture}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageBrandContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: imageUrl}} style={styles.image} />
        </View>
        <View style={styles.brandContainer}>
          <Text style={styles.brandText}>{brand}</Text>
        </View>
      </View>
      <View style={styles.fullDescriptionContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 25,
    borderBottomColor: CONSTANTS.TEXT_COLOR,
    borderBottomWidth: 1,
    paddingBottom: 7,
    flex: 1,
  },
  imageBrandContainer: {
    maxWidth: 84,
    flex: 0,
  },
  imageContainer: {
    borderRadius: 6,
    borderColor: CONSTANTS.ACCENT_COLOR,
    borderWidth: 1,
    overflow: 'hidden',
  },
  image: {width: 84, height: 60},
  fullDescriptionContainer: {
    flex: 1,
    marginLeft: 6,
  },
  brandContainer: {
    alignItems: 'center',
    marginTop: 4,
  },
  brandText: {
    fontFamily: CONSTANTS.FONT_LIGHT,
    color: CONSTANTS.TEXT_COLOR,
  },
  title: {
    fontFamily: CONSTANTS.FONT_BOLD,
    color: CONSTANTS.TEXT_COLOR,
    fontSize: 16,
  },
  description: {
    fontFamily: CONSTANTS.FONT_REGULAR,
    color: CONSTANTS.TEXT_COLOR,
  },
});

export default Result;
