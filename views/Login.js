import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../global_state/constants';
import InputField from '../components/input/InputField';
import CustomButton from '../components/input/CustomButton';

const Login = () => {
  const [usernameInput, setusernameInput] = useState('');
  const [passwordInput, setpasswordInput] = useState('');

  const loginHandler = () => {
    // When the user presses the login button this function gets called
    console.log('LOGIN');
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
            textChangeHandler={newInput => setusernameInput(newInput)}
          />
        </View>
        <View style={styles.inputContainer}>
          <InputField
            placeholderText="Password"
            textChangeHandler={newInput => setpasswordInput(newInput)}
          />
        </View>
      </View>
      <View>
        <CustomButton pressHandler={loginHandler} title="Login" />
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
});

export default Login;
