/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/navigation/screens/Home';
import Profile from './src/navigation/screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Wishlist from './src/navigation/screens/wishlist';
import Cart from './src/navigation/screens/cart';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerStyle: {
              backgroundColor: 'red',
            },
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Wishlist" component={Wishlist} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Group>

        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
