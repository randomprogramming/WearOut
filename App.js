import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS, API, ACTIONS } from './global_state/constants';
import Homescreen from './views/Homescreen';
import LoginRegisterStackPage from './views/LoginRegisterStackPage';

const App = () => {
  const dispatch = useDispatch();
  const accountData = useSelector(state => state.account);

  const extractCurrentAccount = data => {
    // If data is not empty, dispatch the data to the redux store and tell the app that the user is logged in
    if (data) {
      dispatch({
        type: ACTIONS.CHANGE_ACCOUNT,
        payload: {
          username: data.name,
          authenticated: data.authenticated,
        },
      });
    }
  };

  useEffect(() => {
    //Fetch the csrf token and store it in the state when the app loads here
    axios
      .get(API.getCSRF)
      .then(res =>
        dispatch({ type: ACTIONS.SET_CSRF_TOKEN, payload: res.data }),
      );

    //Get info about currently logged in account here
    axios.get(API.getMe).then(res => extractCurrentAccount(res.data));
  }, []);

  return (
    <View style={styles.main}>
      <StatusBar
        backgroundColor={COLORS.MAIN_BACKGROUND}
        barStyle="dark-content"
      />
      {accountData.isAuthenticated ? (
        <Homescreen />
      ) : (
        <LoginRegisterStackPage />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
