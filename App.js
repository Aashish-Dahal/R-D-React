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
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from './src/navigation/screens/Home';
import Wishlist from './src/navigation/screens/wishlist';
import Cart from './src/navigation/screens/cart';
import Profile from './src/navigation/screens/Profile';

const Tab = createMaterialBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red',
          },
          tabBarStyle: {
            backgroundColor: 'white',
          },
          tabBarLabelStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color="white" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="cards-heart"
                color="white"
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="cart" color="white" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="account" color="white" size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
