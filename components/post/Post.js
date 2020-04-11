import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import { FONTS, COLORS, SCREEN_NAMES } from '../../global_state/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const headerHeight = 34;

const Post = ({
  id,
  authorUsername,
  authorLinkToProfilePicture,
  authorId,
  numberOfLikes,
  numberOfComments,
  linkToImage,
  text,
  accountProfileNavigation,
}) => {
  return (
    <View style={styles.main}>
      <View style={styles.postHeader}>
        <View style={styles.headerInformationContainer}>
          <TouchableOpacity
            style={styles.headerInformationContainer}
            onPress={() => accountProfileNavigation(authorId)}>
            <View>
              <Image
                source={{ uri: authorLinkToProfilePicture }}
                style={styles.accountProfilePicture}
              />
            </View>
            <View>
              <Text style={styles.accountUsernameText}>{authorUsername}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image source={{ uri: linkToImage }} style={styles.postImage} />
      </View>
      <View>
        <Text style={styles.likeCountText}>{numberOfLikes} likes</Text>
      </View>
      <View>
        <Text>This</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  postHeader: {
    height: headerHeight,
    paddingHorizontal: 7,
    marginVertical: 7,
  },
  headerInformationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountProfilePicture: {
    height: headerHeight,
    width: headerHeight,
    borderRadius: headerHeight / 2,
  },
  accountUsernameText: {
    fontFamily: FONTS.BOLD,
    fontSize: 16,
    color: COLORS.TEXT_COLOR,
    marginLeft: 7,
  },
  postImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
  likeCountText: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.TEXT_COLOR,
    marginLeft: 7,
    marginVertical: 4,
  },
});

export default Post;
