import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { COLORS, API, FONTS } from '../global_state/constants';
import CustomButton from '../components/input/CustomButton';
import accountActions from '../global_state/actions/accountActions';

const AccountProfile = ({ route }) => {
  //route.params.id can be one of the 2 values: either "self" or a number, which represents the id of the person
  //on whos profile we currently are located
  const accountId = route.params.id;
  const selfAccount = useSelector(state => state.account);
  const [activeAccount, setactiveAccount] = useState({});
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

  useEffect(() => {
    // fetchSelfAccount();
  }, [isFollowing]);

  useEffect(() => {
    //this could be written a bit neater if we had the ID of the currently logged in user,
    //but since we don't this will work just fine too.
    if (accountId === 'self') {
      //if accountId is "self", it means that the user is looking at their own profile
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

  return (
    <View style={styles.main}>
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
              {activeAccount.posts ? activeAccount.posts.length : 0}
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
    </View>
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
});

export default AccountProfile;
