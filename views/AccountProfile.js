import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccountProfile = ({ route }) => {
  //if the route.params.id is defined, it means that we were redirected here from somewhere else,
  //and we have to make a request to the server and search for the person with the id
  //if route.params.id is not defined, it means that the user clicked on their own profile
  let accountId = route.params.id ? route.params.id : 'self';

  return (
    <View>
      <Text>Profile page</Text>
      <Text>{accountId}</Text>
    </View>
  );
};

export default AccountProfile;
