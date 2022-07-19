import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

export default function Cart() {
  const route = useRoute();
  return <Text style={styles.textStyle}>Cart Screen {route.params.id}</Text>;
}
const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
    fontSize: 20,
  },
});
