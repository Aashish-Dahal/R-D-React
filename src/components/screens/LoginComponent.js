import React from 'react';

import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import * as Color from '../../utils/style/Color';
import {styles} from '../../utils/style/Styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function LoginScreen() {
  return (
    <LinearGradient
      colors={[Color.darkBlue, Color.lightBlue]}
      style={styles.gradient}>
      <View style={styles.mainContainer}>
        <Image
          style={{
            height: 180,
            width: 180,
          }}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2014/12/22/00/07/tree-576847__480.png',
          }}
        />
        <Text style={styles.heading}>Welcome Back</Text>
        <Text style={styles.bodySmall}>Login to your account</Text>
        <View style={styles.inputCard}>
          <Icon
            name="email-outline"
            size={20}
            color={Color.darkBlue}
            style={{marginLeft: 10, marginTop: 10, marginRight: 5}}></Icon>
          <TextInput placeholder="Username" placeholderTextColor="#3e70b2" />
        </View>
        <View style={styles.inputCard}>
          <Icon
            name="lock-outline"
            size={20}
            color={Color.darkBlue}
            style={{marginLeft: 10, marginTop: 10, marginRight: 5}}></Icon>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#3e70b2"
            secureTextEntry={true}
          />
        </View>
        <LinearGradient
          start={{x: 0, y: 0.0}}
          end={{x: 1, y: 0}}
          colors={['#293959', '#3b4d92']}
          style={styles.gradientButton}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text>LOGIN</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
}
