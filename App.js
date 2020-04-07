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

  const extractCurrentAccount = data => {
    // If data is not empty, dispatch the data to the redux store and tell the app that the user is logged in
    if (data) {
      axios.get(API.searchAccountByUsername(data.name)).then(res =>
        dispatch({
          type: ACTIONS.CHANGE_ACCOUNT,
          // as the payload we have to send the data and also data if the user is authenticated
          // we also set the isLoaded property to true so that we can check when the data is loaded
          // this will be used for animation and stuff later
          payload: {
            ...{
              authenticated: data.authenticated,
              isLoaded: true,
            },
            ...res.data,
          },
        }),
      );
    }
  };

  const updateUser = (isAuthenticated, username) => {
    axios
      .get(API.searchAccountByUsername(username))
      .then(res =>
        dispatch(
          accountActions.changeAccount({ ...res.data, isAuthenticated }),
        ),
      );
  };

  useEffect(() => {
    //Fetch the csrf token and store it in the state when the app loads here
    axios
      .get(API.getCSRF)
      .then(res =>
        dispatch({ type: ACTIONS.SET_CSRF_TOKEN, payload: res.data }),
      );

    //Get info about currently logged in account here
    axios.get(API.getMe).then(meRes => {
      if (meRes.data.name) {
        updateUser(meRes.data.authenticated, meRes.data.name);
      }
    });
  }, []);

  return (
    <View style={styles.main}>
      <StatusBar
        backgroundColor={COLORS.MAIN_BACKGROUND}
        barStyle="dark-content"
      />
      {console.log(accountData)}
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
