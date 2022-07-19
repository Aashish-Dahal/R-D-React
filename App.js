/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './src/navigation/screens/Home';
import Wishlist from './src/navigation/screens/wishlist';
import Cart from './src/navigation/screens/cart';
import Profile from './src/navigation/screens/Profile';

const Tab = createMaterialTopTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Wishlist" component={Wishlist} />

        <Tab.Screen name="Cart" component={Home} />

        <Tab.Screen name="Profile" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
