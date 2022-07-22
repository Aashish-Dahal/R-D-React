import React, {useState} from 'react';

import {View, ScrollView, Alert} from 'react-native';
import * as Color from '../../utils/style/Color';
import {styles} from '../../utils/style/Styles';
import LinearGradient from 'react-native-linear-gradient';

import InputField from '../customComponents/InputField';
import RichText from '../customComponents/RichText';
import ImageBox from '../customComponents/ImageBox';
import GradientButton from '../customComponents/GradientButton';
import CheckBoxTile from '../customComponents/CheckBoxTile';
import {useForm} from 'react-hook-form';
import FirebaseUtil from '../../utils/firebase/firebase';

export default function LoginScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onLoginPressed = async data => {
    if (loading) {
      return;
    }
    setLoading(true);
    await FirebaseUtil.sigIn(data.username, data.password).catch(e => {
      console.log(e);
      alert('Email/password is wrong');
    });
    setLoading(false);
  };
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
            name="username"
            control={control}
            iconName="email-outline"
            placeholder="Username"></InputField>

          <InputField
            rules={{
              required: 'Password is required',
              minLength: {
                value: 3,
                message: 'Password should be minimum 3 characters long',
              },
            }}
            name="password"
            control={control}
            iconName="lock-outline"
            placeholder="Password"
            secureTextEntry={true}></InputField>
          <CheckBoxTile trailing="Forgot Password?" />
          <GradientButton
            text={loading ? 'Loading...' : 'LOGIN'}
            onPress={handleSubmit(onLoginPressed)}
          />
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
