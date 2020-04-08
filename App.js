import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS, API, ACTIONS } from './global_state/constants';
import Homescreen from './views/Homescreen';
import LoginRegisterStackPage from './views/LoginRegisterStackPage';
import accountActions from './global_state/actions/accountActions';

const App = () => {
  const dispatch = useDispatch();
  const accountData = useSelector(state => state.account);

  const updateSelfAccount = (isAuthenticated, username) => {
    axios
      .get(API.searchAccountByUsername(username))
      .then(res =>
        dispatch(
          accountActions.changeAccount({ ...res.data, isAuthenticated }),
        ),
      );
  };

  const fetchSelfAccount = () => {
    axios.get(API.getMe).then(meRes => {
      if (meRes.data.name) {
        updateSelfAccount(meRes.data.authenticated, meRes.data.name);
      }
    });
  };

  useEffect(() => {
    //Fetch the csrf token and store it in the state when the app loads here
    axios
      .get(API.getCSRF)
      .then(res =>
        dispatch({ type: ACTIONS.SET_CSRF_TOKEN, payload: res.data }),
      );

    //Get info about currently logged in account here
    fetchSelfAccount();
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
