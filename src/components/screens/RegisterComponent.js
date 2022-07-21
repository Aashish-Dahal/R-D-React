import React from 'react';

import {Text, View, TouchableOpacity} from 'react-native';
import * as Color from '../../utils/style/Color';
import {styles} from '../../utils/style/Styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageBox from '../customComponents/ImageBox';
import RichText from '../customComponents/RichText';
import InputField from '../customComponents/InputField';
import GradientButton from '../customComponents/GradientButton';

export default function RegisterScreen({navigation}) {
  return (
    <LinearGradient
      colors={[Color.darkBlue, Color.lightBlue]}
      style={styles.gradient}>
      <View style={styles.mainContainer}>
        <ImageBox height={140} width={140} />
        <RichText
          headingStyle={styles.heading}
          subHeadingStyle={styles.subHeading}
          heading="Register"
          subHeading="Create your account"
        />
        <InputField iconName="account" placeholder="Username"></InputField>
        <InputField
          iconName="email-outline"
          placeholder="Email address"></InputField>
        <InputField iconName="lock-outline" placeholder="Password"></InputField>
        <InputField
          iconName="lock-outline"
          placeholder="Confirm password"></InputField>
        <Text style={{fontSize: 14, textAlign: 'center', marginTop: 10}}>
          By registering,you are agreeing to our Terms of use and{'\n'} Privacy
          Policy.
        </Text>

        <GradientButton text="REGISTER" />
        <RichText
          onPress={() => navigation.navigate('Login')}
          disabled={false}
          headingStyle={styles.text}
          subHeadingStyle={styles.subText}
          flexDirection="row"
          heading="Already have an account?"
          subHeading="Login"></RichText>
      </View>
    </LinearGradient>
  );
}
