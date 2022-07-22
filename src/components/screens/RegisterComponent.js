import React, {useState} from 'react';

import {ActivityIndicator, Text, View} from 'react-native';
import * as Color from '../../utils/style/Color';
import {styles} from '../../utils/style/Styles';
import LinearGradient from 'react-native-linear-gradient';
import ImageBox from '../customComponents/ImageBox';
import RichText from '../customComponents/RichText';
import InputField from '../customComponents/InputField';
import GradientButton from '../customComponents/GradientButton';
import FirebaseUtil from '../../utils/firebase/firebase';
import {useForm} from 'react-hook-form';

export default function RegisterScreen({navigation}) {
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const handleRegister = async data => {
    if (loading) {
      return;
    }
    setLoading(true);
    await FirebaseUtil.signUp(data.email, data.password).catch(e => {
      console.log(e);

      alert('something wrong');
    });
    setLoading(false);
  };
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
        <InputField
          rules={{required: 'Username is required'}}
          name="username"
          control={control}
          iconName="account"
          placeholder="Username"></InputField>
        <InputField
          rules={{required: 'Email is required'}}
          name="email"
          control={control}
          iconName="email-outline"
          placeholder="Email address"></InputField>
        <InputField
          rules={{required: 'Password is required'}}
          name="password"
          control={control}
          iconName="lock-outline"
          placeholder="Password"></InputField>
        <InputField
          name="cp"
          control={control}
          iconName="lock-outline"
          placeholder="Confirm password"></InputField>
        <Text style={{fontSize: 14, textAlign: 'center', marginTop: 10}}>
          By registering,you are agreeing to our Terms of use and{'\n'} Privacy
          Policy.
        </Text>
        {loading ? (
          <ActivityIndicator size="large" color="red"></ActivityIndicator>
        ) : (
          <GradientButton
            text="REGISTER"
            onPress={handleSubmit(handleRegister)}
          />
        )}
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
