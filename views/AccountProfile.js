import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

import { COLORS, API } from '../global_state/constants';
import { useSelector } from 'react-redux';

const AccountProfile = ({ route }) => {
  //route.params.id can be one of the 2 values: either "self" or a number, which represents the id of the person
  //on whos profile we currently are located
  const accountId = route.params.id;
  const selfAccountUsername = useSelector(state => state.account.username);

  const [activeAccount, setactiveAccount] = useState({});

  useEffect(() => {
    //this could be written a bit neater if we had the ID of the currently logged in user,
    //but since we don't this will work just fine too.
    if (accountId === 'self') {
      //if accountId is "self", we search for the user by username since we know the username
      axios
        .get(API.searchAccountByUsername(selfAccountUsername))
        .then(res => setactiveAccount(res.data))
        .catch(err => console.log('account not found'));
    } else {
      //else we search for the user by id
      axios
        .get(API.searchAccountById(accountId))
        .then(res => setactiveAccount(res.data))
        .catch(err => console.log('account not found'));
    }
  }, []);

  return (
    <View style={styles.main}>
      <Text>Profile page</Text>
      <Text>{activeAccount.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.MAIN_BACKGROUND,
  },
});

export default AccountProfile;
