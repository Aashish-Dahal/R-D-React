import React from 'react';
import {styles} from '../../utils/style/Styles';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Button;
