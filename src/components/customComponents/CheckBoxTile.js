import React from 'react';
import {styles} from '../../utils/style/Styles';
import {View, TouchableOpacity, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
const CheckBoxTile = ({trailing}) => {
  return (
    <View style={[styles.checkBoxTile]}>
      <CheckBox
        textStyle={{color: 'white'}}
        uncheckedColor="black"
        checkedColor="white"
        size={20}
        center={false}
        right={false}
        containerStyle={styles.checkBoxContainer}
        title="Remember me"
        checked={true}
        disabledStyle={true}></CheckBox>

      <TouchableOpacity>
        <Text style={styles.trailing}>{trailing} </Text>
      </TouchableOpacity>
    </View>
  );
};
export default CheckBoxTile;
