import React from 'react';

import {View, ScrollView} from 'react-native';
import * as Color from '../../utils/style/Color';
import {styles} from '../../utils/style/Styles';
import LinearGradient from 'react-native-linear-gradient';

import InputField from '../customComponents/InputField';
import RichText from '../customComponents/RichText';
import ImageBox from '../customComponents/ImageBox';
import GradientButton from '../customComponents/GradientButton';
import CheckBoxTile from '../customComponents/CheckBoxTile';

export default function LoginScreen({navigation}) {
  return (
    <LinearGradient
      colors={[Color.darkBlue, Color.lightBlue]}
      style={styles.gradient}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <ImageBox />
          <RichText
            headingStyle={styles.heading}
            subHeadingStyle={styles.subHeading}
            heading="Welcome Back"
            subHeading="Login to your account"></RichText>
          <InputField
            iconName="email-outline"
            placeholder="Username"></InputField>
          <InputField
            iconName="lock-outline"
            placeholder="Password"
            secureTextEntry={true}></InputField>
          <CheckBoxTile trailing="Forgot Password?" />
          <GradientButton text="LOGIN" />
          <RichText
            onPress={() => navigation.navigate('Register')}
            disabled={false}
            headingStyle={styles.text}
            subHeadingStyle={styles.subText}
            flexDirection="row"
            heading="Don't have an account?"
            subHeading="Sign up"></RichText>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
