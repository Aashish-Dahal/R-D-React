import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import * as Color from '../../utils/style/Color';
import {styles} from '../../utils/style/Styles';
import {View} from 'react-native';
import ImageBox from '../customComponents/ImageBox';
import RichText from '../customComponents/RichText';
import GradientButton from '../customComponents/GradientButton';
import Button from '../customComponents/Button';

export default function AuthScreen({navigation}) {
  return (
    <LinearGradient
      colors={[Color.darkBlue, Color.lightBlue]}
      style={styles.gradient}>
      <View style={styles.mainContainer}>
        <ImageBox height={220} width={220} />

        <RichText
          headingStyle={styles.heading}
          subHeadingStyle={styles.subHeading}
          heading="Plantly"
          subHeading="Can't seem to keep a plant alive?
Let us help you can change that"></RichText>
        <GradientButton
          text="LOGIN"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          text="SIGN UP"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </LinearGradient>
  );
}
