import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function Home() {
  return (
    <View>
      <Text style={styles.textStyle}>Home Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
  },
  link: {
    fontSize: 20,
    color: 'red',
  },
});
