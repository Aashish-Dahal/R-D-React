import React from 'react';

import {Text, StyleSheet} from 'react-native';
export default function Home() {
  return <Text style={styles.textStyle}>Home Screen</Text>;
}
const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
  },
});
