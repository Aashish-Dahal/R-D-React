import {StyleSheet, Text, View} from 'react-native';
import {styles} from '../../utils/style/Styles';
import React from 'react';
import GradientButton from '../customComponents/GradientButton';
import FirebaseUtil from '../../utils/firebase/firebase';

const HomeScreen = ({navigation}) => {
  const handleSignOut = () => {
    FirebaseUtil.signOut();
    navigation.navigate('Login');
  };
  return (
    <View style={styles.mainContainer}>
      <GradientButton
        text="SIGN OUT"
        onPress={() => {
          handleSignOut();
        }}></GradientButton>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({});
