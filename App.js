/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}> Demo App</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
