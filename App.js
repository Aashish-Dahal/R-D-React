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
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/navigation/screens/Home';
import Wishlist from './src/navigation/screens/wishlist';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red',
          },
          drawerActiveBackgroundColor: 'red',
          drawerActiveTintColor: 'white',
          drawerStyle: {
            width: 220,
          },
        }}>
        <Drawer.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            drawerLabel: 'Home Screen',
            drawerIcon: props => (
              <MaterialCommunityIcons
                name="home"
                size={28}
                color="white"
                style={{paddingLeft: 10}}
                onPress={() => console.log('Home Clicked')}
              />
            ),
          }}
        />
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
