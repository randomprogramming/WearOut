import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import { COLORS, SCREEN_NAMES } from './global_state/constants';
import Homescreen from './views/Homescreen';
import Search from './views/Search';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <View style={styles.main}>
      <StatusBar
        backgroundColor={COLORS.MAIN_BACKGROUND}
        barStyle="dark-content"
      />
      <Tab.Navigator
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
        <Tab.Screen name={SCREEN_NAMES.HOME} component={Homescreen} />
        <Tab.Screen name={SCREEN_NAMES.SEARCH} component={Search} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
