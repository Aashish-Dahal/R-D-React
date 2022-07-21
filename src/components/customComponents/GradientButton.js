import React from 'react';
import {styles} from '../../utils/style/Styles';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#293959', '#293959', '#3b4d92']}
        style={styles.gradientButton}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default GradientButton;
