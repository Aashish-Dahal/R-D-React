import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import * as Color from '../../utils/style/Color';
import {styles} from '../../utils/style/Styles';
import {Text, View, TouchableOpacity, Image} from 'react-native';

export default function AuthScreen({navigation}) {
  return (
    <LinearGradient
      colors={[Color.darkBlue, Color.lightBlue]}
      style={styles.gradient}>
      <View style={styles.mainContainer}>
        <Image
          style={{
            height: 220,
            width: 220,
          }}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2014/12/22/00/07/tree-576847__480.png',
          }}
        />

        <View>
          <Text style={styles.heading}>Plantly</Text>
          <Text style={styles.bodySmall}>
            Can't seem to keep a plant alive? {'\n'}Let us help you can change
            that
          </Text>
        </View>
        <View>
          <LinearGradient
            start={{x: 0, y: 0.0}}
            end={{x: 1, y: 0}}
            colors={['#293959', '#3b4d92']}
            style={styles.gradientButton}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text>LOGIN</Text>
            </TouchableOpacity>
          </LinearGradient>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Register')}>
            <Text>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
