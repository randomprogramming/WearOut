import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { SCREEN_NAMES } from '../global_state/constants';
import PostFeed from './PostFeed';
import AccountProfile from './AccountProfile';

const Stack = createStackNavigator();

const PostFeedStack = ({ route }) => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName={SCREEN_NAMES.POST_FEED}>
      <Stack.Screen
        name={SCREEN_NAMES.POST_FEED}
        component={PostFeed}
        initialParams={{ data: route.params.data }}
      />
      <Stack.Screen
        name={SCREEN_NAMES.ANOTHER_ACCOUNT_PROFILE}
        component={AccountProfile}
      />
    </Stack.Navigator>
  );
};

export default PostFeedStack;
