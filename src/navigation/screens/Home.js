import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.textStyle}>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Cart with params"
        onPress={() => navigation.navigate('Cart', {id: 11})}
      />
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
