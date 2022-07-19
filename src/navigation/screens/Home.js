import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Link} from '@react-navigation/native';

export default function Home() {
  return (
    <View>
      <Text style={styles.textStyle}>Home Screen</Text>
      <Link to={{screen: 'Profile'}} style={styles.link}>
        {' '}
        Go to Profile
      </Link>
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
