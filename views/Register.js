import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useSelector } from 'react-redux';

import { COLORS, FONTS, API } from '../global_state/constants';
import InputField from '../components/input/InputField';
import CustomButton from '../components/input/CustomButton';
import axios from 'axios';

const Register = () => {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const csrf = useSelector(state => state.csrf);

  const tester = () => {
    axios({
      url: API.registerAccount,
      method: 'POST',
      withCredentials: true,
      headers: {
        [csrf.headerName]: csrf.token,
      },
      data: {
        username,
        email,
        password,
        confirmPassword,
      },
      // TODO: Tell the user that something went wrong instead of printing something
    })
      .then(res => {
        if (res.status === 200) {
          Alert.alert('Registration successful');
        }
      })
      .catch(e => console.log('ERROR WHILE REGISTERING'));
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
            placeholderText="Email"
            keyboardType="email-address"
            textChangeHandler={newInput => setemail(newInput)}
          />
        </View>
        <View style={styles.inputContainer}>
          <InputField
            isSecure
            placeholderText="Password"
            textChangeHandler={newInput => setpassword(newInput)}
          />
        </View>
        <View style={styles.inputContainer}>
          <InputField
            isSecure
            placeholderText="Repeated password"
            textChangeHandler={newInput => setconfirmPassword(newInput)}
          />
        </View>
        <View>
          <CustomButton title="Register" onPress={tester} />
        </View>
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

export default Register;
