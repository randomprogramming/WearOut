import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN_NAMES } from '../global_state/constants';
import Login from './Login';
import Register from './Register';

const Stack = createStackNavigator();

const LoginRegisterStackPage = () => {
  return (
    <Stack.Navigator initialRouteName={SCREEN_NAMES.LOGIN} headerMode="none">
      <Stack.Screen name={SCREEN_NAMES.LOGIN} component={Login} />
      <Stack.Screen name={SCREEN_NAMES.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};

export default LoginRegisterStackPage;
