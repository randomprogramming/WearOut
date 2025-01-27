import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { COLORS, API, FONTS, SCREEN_NAMES } from '../global_state/constants';
import CustomButton from '../components/input/CustomButton';
import accountActions from '../global_state/actions/accountActions';
import { TouchableHighlight } from 'react-native-gesture-handler';

const AccountProfile = ({ route, navigation }) => {
  //route.params.id can be one of the 2 values: either "self" or a number, which represents the id of the person
  //on whos profile we currently are located
  const accountId = route.params.id;
  const selfAccount = useSelector(state => state.account);
  const [activeAccount, setactiveAccount] = useState({});
  const [activeAccountPosts, setactiveAccountPosts] = useState([]);
  const [isFollowing, setisFollowing] = useState(false);
  const dispatch = useDispatch();

  const updateUser = (isAuthenticated, username) => {
    axios
      .get(API.searchAccountByUsername(username))
      .then(res =>
        dispatch(
          accountActions.changeAccount({ ...res.data, isAuthenticated }),
        ),
      );
  };

  const fetchSelfAccount = () => {
    // TODO: Figure out how to make this function and the updateUser function global
    // don't know how to do this yet since dispatch needs to be used inside of a react functional component
    axios.get(API.getMe).then(meRes => {
      if (meRes.data.name) {
        updateUser(meRes.data.authenticated, meRes.data.name);
      }
    });
  };

  const handleFollow = () => {
    axios
      .get(API.changeFollowStatus(activeAccount.id))
      .then(res => checkFollowingStatus(selfAccount.id, activeAccount.id))
      // when the user follows someone, we want to update their profile
      // .then(() => fetchSelfAccount())
      .catch(err => console.log('error'));
  };

  const checkFollowingStatus = (followerId, followingId) => {
    axios
      .get(API.checkFollowStatus(followerId, followingId))
      .then(res => setisFollowing(res.data))
      .catch(err => console.log(err));
  };

  const fetchPostsFor = username => {
    axios
      .get(API.getPostsFor(username))
      .then(res => setactiveAccountPosts(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    // whenever isFollowing changes, we want to fetch the data again.
    if (accountId === 'self') {
      //if accountId is "self", it means that the user is looking at their own profile
      //TODO: Update the self account in the redux store when user follows a new account
      setactiveAccount(selfAccount);
    } else {
      //else we search for the user by id
      axios
        .get(API.searchAccountById(accountId))
        .then(res => setactiveAccount(res.data))
        .catch(err => console.log('account not found'));
    }
  }, [isFollowing]);

  useEffect(() => {
    if (selfAccount.id && activeAccount.id) {
      checkFollowingStatus(selfAccount.id, activeAccount.id);
    }
  }, [activeAccount, selfAccount]);

  useEffect(() => {
    if (activeAccount.username) {
      fetchPostsFor(activeAccount.username);
    }
  }, [activeAccount]);

  return (
    <ScrollView style={styles.main}>
      <View style={styles.infoContainer}>
        <View>
          <Image
            source={{ uri: activeAccount.linkToProfilePicture }}
            style={styles.profilePicture}
          />
        </View>
        <View style={styles.accountNumbers}>
          <View>
            <Text style={styles.accountNumbersText}>Posts</Text>
            <Text style={styles.accountNumbersNumber}>
              {/* //TODO: Implement post count */}
              {activeAccount.postCount ? activeAccount.postCount : 0}
            </Text>
          </View>
          <View>
            <Text style={styles.accountNumbersText}>Followers</Text>
            <Text style={styles.accountNumbersNumber}>
              {activeAccount.followedByCount
                ? activeAccount.followedByCount
                : 0}
            </Text>
          </View>
          <View>
            <Text style={styles.accountNumbersText}>Following</Text>
            <Text style={styles.accountNumbersNumber}>
              {activeAccount.followingCount ? activeAccount.followingCount : 0}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.accountNameAndDescriptionContainer}>
        <Text style={styles.usernameText}>{activeAccount.username}</Text>
        <View>
          <Text style={styles.descriptionText}>
            {activeAccount.description}
          </Text>
        </View>
      </View>
      <View
        style={
          // If the user is looking at their own profile, don't show the follow button
          activeAccount.username === selfAccount.username
            ? { display: 'none' }
            : { marginTop: 15 }
        }>
        {isFollowing ? (
          <CustomButton title="Unfollow" onPress={() => handleFollow()} />
        ) : (
          <CustomButton title="Follow" onPress={() => handleFollow()} />
        )}
      </View>
      <View style={styles.accountPostsContainer}>
        {activeAccountPosts.map((post, i) => {
          return (
            <View key={post.id}>
              <TouchableHighlight
                onPress={() => {
                  navigation.push(SCREEN_NAMES.POST_FEED, {
                    data: activeAccountPosts,
                  });
                }}
                activeOpacity={0.5}>
                <Image
                  source={{ uri: post.linkToImage }}
                  style={styles.postImage}
                />
              </TouchableHighlight>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.MAIN_BACKGROUND,
  },
  infoContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 15,
  },
  accountNameAndDescriptionContainer: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  usernameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  usernameText: {
    fontFamily: FONTS.BOLD,
    fontSize: 16,
    color: COLORS.TEXT_COLOR,
  },
  profilePicture: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  accountNumbers: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  accountNumbersText: {
    fontFamily: FONTS.BOLD,
    color: COLORS.TEXT_COLOR,
    fontSize: 14,
  },
  accountNumbersNumber: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.TEXT_COLOR,
    alignSelf: 'center',
  },
  descriptionText: {
    fontFamily: FONTS.REGULAR,
    fontSize: 14,
    color: COLORS.TEXT_COLOR,
  },
  accountPostsContainer: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  postImage: {
    // we want to desplay 3 images in each row
    // since each image has a margin of 1, in total the margin is equal to 6
    // we subtract that margin from the total device width, and we divide by 3
    // so that each image gets exactly a third of available space
    height: (Dimensions.get('window').width - 6) / 3,
    width: (Dimensions.get('window').width - 6) / 3,
    margin: 1,
  },
});

export default AccountProfile;
