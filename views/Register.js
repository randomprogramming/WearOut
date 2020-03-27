import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../global_state/constants';
import InputField from '../components/input/InputField';
import CustomButton from '../components/input/CustomButton';

const Register = () => {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [repeatedPassword, setrepeatedPassword] = useState('');

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
            textChangeHandler={newInput => setemail(username)}
          />
        </View>
        <View style={styles.inputContainer}>
          <InputField
            placeholderText="Password"
            textChangeHandler={newInput => setpassword(newInput)}
          />
        </View>
        <View style={styles.inputContainer}>
          <InputField
            placeholderText="Repeated password"
            textChangeHandler={newInput => setrepeatedPassword(newInput)}
          />
        </View>
        <View>
          <CustomButton title="Register" />
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
