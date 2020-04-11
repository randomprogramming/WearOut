import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import Post from '../components/post/Post';
import { COLORS, SCREEN_NAMES } from '../global_state/constants';

const PostFeed = ({ route, navigation }) => {
  return (
    <View style={styles.main}>
      {route.params.data ? (
        <FlatList
          data={route.params.data}
          renderItem={({ item }) => {
            return (
              <Post
                key={item.id}
                id={item.id}
                authorUsername={item.author.username}
                authorLinkToProfilePicture={item.author.linkToProfilePicture}
                authorId={item.author.id}
                numberOfLikes={item.numberOfLikes}
                numberOfComments={item.numberOfComments}
                linkToImage={item.linkToImage}
                text={item.text}
                //this prop gets called when the user clicks on the profile of a person inside a post
                accountProfileNavigation={accountId =>
                  navigation.push(SCREEN_NAMES.ANOTHER_ACCOUNT_PROFILE, {
                    id: accountId,
                  })
                }
              />
            );
          }}
          keyExtractor={item => item.id}
        />
      ) : (
        <View>
          <Text>Loading</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.MAIN_BACKGROUND,
  },
});

export default PostFeed;
