import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { COLORS, FONTS, SCREEN_NAMES, API } from '../global_state/constants';
import InputField from '../components/input/InputField';
import CustomButton from '../components/input/CustomButton';

const Login = ({ navigation }) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const csrf = useSelector(state => state.csrf);

  const loginHandler = () => {
    // When the user presses the login button this function gets called
    axios({
      url: API.login,
      method: 'POST',
      withCredentials: true,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      // data: {
      //   // username,
      //   // password,
      //   [csrf.parameterName]: csrf.token,
      // },
      data: `username=${username}&password=${password}&_csrf=${csrf.token}`,
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    // fetch('http://localhost:8080/loginaccount', {
    //   credentials: 'include',
    //   headers: {
    //     accept:
    //       'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    //     'accept-language': 'en-US,en;q=0.9',
    //     'cache-control': 'max-age=0',
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'sec-fetch-dest': 'document',
    //     'sec-fetch-mode': 'navigate',
    //     'sec-fetch-site': 'same-origin',
    //     'sec-fetch-user': '?1',
    //     'upgrade-insecure-requests': '1',
    //   },
    //   referrer: 'http://localhost:8080/login',
    //   referrerPolicy: 'no-referrer-when-downgrade',
    //   body:
    //     'username=test&password=aaaaaaaaaa&_csrf=15267c79-2586-4594-9c1f-e540899e551e',
    //   method: 'POST',
    //   mode: 'cors',
    // });
  };

  return (
    <View style={styles.main}>
      <View>
        <Text
          style={styles.logoContainer}
          onPress={() => {
            axios.get(API.getMe).then(res => console.log(res.data));
          }}>
          Wo
        </Text>
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
        <Text style={styles.registerText}>Don't have an account? </Text>
        <Text
          style={styles.highlightedText}
          onPress={() => navigation.navigate(SCREEN_NAMES.REGISTER)}>
          Sign up.
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
    flexDirection: 'row',
    justifyContent: 'center',
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
