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

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            title: 'Gadget Shop',
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            headerShown: true,
            headerLeft: props => (
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
