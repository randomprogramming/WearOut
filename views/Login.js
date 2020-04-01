import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import {
  COLORS,
  FONTS,
  SCREEN_NAMES,
  API,
  ACTIONS,
} from '../global_state/constants';
import InputField from '../components/input/InputField';
import CustomButton from '../components/input/CustomButton';

const Login = ({ navigation }) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const dispatch = useDispatch();
  const csrf = useSelector(state => state.csrf);

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

  const checkLoginStatus = () => {
    // Make a request to the server and check if the user is logged in
    axios.get(API.getMe).then(res => {
      extractCurrentAccount(res.data);
    });
  };

  const loginHandler = () => {
    // When the user presses the login button this function gets called
    // Log in the user
    axios({
      url: API.login,
      method: 'POST',
      withCredentials: true,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: `username=${username}&password=${password}&_csrf=${csrf.token}`,
    }).then(() => {
      checkLoginStatus();
    });
  };

  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.logoContainer}>Wo</Text>
      </View>
      <View>
        <View style={styles.inputContainer}>
          <InputField
            placeholderText="Username"
            textChangeHandler={newInput => setusername(newInput)}
          />
        </View>
        <View style={styles.inputContainer}>
          <InputField
            isSecure
            placeholderText="Password"
            textChangeHandler={newInput => setpassword(newInput)}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <CustomButton onPress={loginHandler} title="Login" />
      </View>
      <View style={styles.registerTextContainer}>
        <Text style={styles.registerText}>
          {"Don't have an account? "}
          <Text
            style={styles.highlightedText}
            onPress={() => navigation.navigate(SCREEN_NAMES.REGISTER)}>
            Sign up.
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.MAIN_BACKGROUND,
    justifyContent: 'center',
  },
  logoContainer: {
    alignSelf: 'center',
    fontFamily: FONTS.BOLD,
    fontSize: 64,
    color: COLORS.TEXT_COLOR,
  },
  inputContainer: {
    marginBottom: 14,
  },
  registerTextContainer: {
    alignSelf: 'center',
  },
  registerText: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.TEXT_COLOR,
  },
  highlightedText: {
    fontFamily: FONTS.BOLD,
    color: COLORS.ACCENT_COLOR,
  },
});

export default Login;
