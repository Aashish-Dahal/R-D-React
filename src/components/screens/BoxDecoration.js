import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

import {View, Text} from 'react-native';
import * as Color from '../../utils/style/Color';
import {styles} from '../../utils/style/Styles';
export default function BoxDecoration() {
  return (
    <LinearGradient
      colors={[Color.darkBlue, Color.lightBlue, Color.darkBlue]}
      style={styles.gradient}></LinearGradient>
  );
}
