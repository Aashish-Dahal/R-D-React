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
import {useForm, Controller} from 'react-hook-form';

export default function LoginScreen({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onLoginPressed = () => {};
  const onFrogotPasswordPressed = () => {};

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
            rules={{required: 'Username is required'}}
            name="Username"
            control={control}
            iconName="email-outline"
            placeholder="Username"></InputField>

          <InputField
            rules={{required: 'Password is required'}}
            name="Password"
            control={control}
            iconName="lock-outline"
            placeholder="Password"
            secureTextEntry={true}></InputField>
          <CheckBoxTile trailing="Forgot Password?" />
          <GradientButton text="LOGIN" onPress={handleSubmit(onLoginPressed)} />
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
