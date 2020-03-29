import React from 'react';
import { View, StyleSheet } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS, SCREEN_NAMES } from '../global_state/constants';
import UserFeed from '../views/UserFeed';
import Search from '../views/Search';
import AccountProfile from '../views/AccountProfile';

const MainTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Homescreen = () => {
  const SearchPage = () => {
    return (
      <View style={styles.main}>
        <Stack.Navigator headerMode="none" initialRouteName="default">
          <Stack.Screen name="default" component={Search} />
          <Stack.Screen
            name={SCREEN_NAMES.ANOTHER_ACCOUNT_PROFILE}
            component={AccountProfile}
          />
        </Stack.Navigator>
      </View>
    );
  };
  return (
    <View style={styles.main}>
      <MainTab.Navigator
        initialRouteName={SCREEN_NAMES.HOME}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            // TODO: Rewrite this so that we can add new tabs in only one place, instead of adding a icon and a tab.screen
            //Depending on the tab name, return a icon to match that tab and show it in the bottom bar
            switch (route.name) {
              case SCREEN_NAMES.HOME:
                //If the screen is home
                return (
                  <AntDesignIcon
                    name="home"
                    size={size}
                    color={focused ? COLORS.ACCENT_COLOR : COLORS.TEXT_COLOR}
                  />
                );
              case SCREEN_NAMES.SEARCH:
                //If the screen is search
                return (
                  <AntDesignIcon
                    name="search1"
                    size={size}
                    color={focused ? COLORS.ACCENT_COLOR : COLORS.TEXT_COLOR}
                  />
                );
              case SCREEN_NAMES.ACCOUNT_PROFILE:
                return (
                  <AntDesignIcon
                    name="user"
                    size={size}
                    color={focused ? COLORS.ACCENT_COLOR : COLORS.TEXT_COLOR}
                  />
                );
              default:
                //If the screen is something else, this shouldn't happen
                return (
                  <AntDesignIcon
                    name="closecircleo"
                    size={size}
                    color={focused ? COLORS.ACCENT_COLOR : COLORS.TEXT_COLOR}
                  />
                );
            }
          },
        })}
        tabBarOptions={{
          showLabel: false,
          keyboardHidesTabBar: true,
          style: { backgroundColor: COLORS.BACKGROUND_DARKER },
        }}>
        <MainTab.Screen name={SCREEN_NAMES.HOME} component={UserFeed} />
        <MainTab.Screen name={SCREEN_NAMES.SEARCH} component={SearchPage} />
        <MainTab.Screen
          name={SCREEN_NAMES.ACCOUNT_PROFILE}
          component={AccountProfile}
          initialParams={{ id: 0 }}
        />
      </MainTab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default Homescreen;
