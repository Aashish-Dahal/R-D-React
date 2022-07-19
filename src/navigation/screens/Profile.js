import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Profile() {
  return <Text style={styles.textStyle}>Profile Screen </Text>;
}
const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
    fontSize: 20,
  },
});
