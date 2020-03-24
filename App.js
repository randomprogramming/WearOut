import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS, SCREEN_NAMES, API, ACTIONS } from './global_state/constants';
import UserFeed from './views/UserFeed';
import Search from './views/Search';
import Homescreen from './views/Homescreen';
import Login from './views/Login';
import LoginRegisterStackPage from './views/LoginRegisterStackPage';

const MainTab = createBottomTabNavigator();

const App = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);

  const extractCurrentAccount = data => {
    let user = {
      username: undefined,
      isAuthenticated: false,
      isLoaded: true,
    };
    if (data.length !== 0) {
      //TODO: Dispatch the user data here
    }
    // TODO: If isLoaded is true and isAuthenticated is false, show the login page
    // else, show the loading page until the user data is loaded in
  };

  useEffect(() => {
    axios.get(API.getMe).then(res => extractCurrentAccount(res));
  }, []);
  return (
    // <View style={styles.main}>
    //   <StatusBar
    //     backgroundColor={COLORS.MAIN_BACKGROUND}
    //     barStyle="dark-content"
    //   />
    //   <MainTab.Navigator
    //     initialRouteName={SCREEN_NAMES.HOME}
    //     screenOptions={({ route }) => ({
    //       tabBarIcon: ({ focused, color, size }) => {
    //         // TODO: Rewrite this so that we can add new tabs in only one place, instead of adding a icon and a tab.screen
    //         //Depending on the tab name, return a icon to match that tab and show it in the bottom bar
    //         switch (route.name) {
    //           case SCREEN_NAMES.HOME:
    //             //If the screen is home
    //             return (
    //               <AntDesignIcon
    //                 name="home"
    //                 size={size}
    //                 color={focused ? COLORS.ACCENT_COLOR : COLORS.TEXT_COLOR}
    //               />
    //             );
    //           case SCREEN_NAMES.SEARCH:
    //             //If the screen is search
    //             return (
    //               <AntDesignIcon
    //                 name="search1"
    //                 size={size}
    //                 color={focused ? COLORS.ACCENT_COLOR : COLORS.TEXT_COLOR}
    //               />
    //             );
    //           default:
    //             //If the screen is something else, this shouldn't happen
    //             return (
    //               <AntDesignIcon
    //                 name="closecircleo"
    //                 size={size}
    //                 color={focused ? COLORS.ACCENT_COLOR : COLORS.TEXT_COLOR}
    //               />
    //             );
    //         }
    //       },
    //     })}
    //     tabBarOptions={{
    //       showLabel: false,
    //       keyboardHidesTabBar: true,
    //       style: { backgroundColor: COLORS.BACKGROUND_DARKER },
    //     }}>
    //     <MainTab.Screen name={SCREEN_NAMES.HOME} component={UserFeed} />
    //     <MainTab.Screen name={SCREEN_NAMES.SEARCH} component={Search} />
    //   </MainTab.Navigator>
    // </View>
    <View style={styles.main}>
      <StatusBar
        backgroundColor={COLORS.MAIN_BACKGROUND}
        barStyle="dark-content"
      />
      {userData.isAuthenticated ? <Homescreen /> : <LoginRegisterStackPage />}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
