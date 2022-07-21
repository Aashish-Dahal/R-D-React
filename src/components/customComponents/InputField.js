import React from 'react';
import {styles} from '../../utils/style/Styles';
import * as Color from '../../utils/style/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, TextInput} from 'react-native';
const InputField = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  iconName,
}) => {
  return (
    <View style={styles.inputCard}>
      <Icon
        name={iconName}
        size={20}
        color={Color.darkBlue}
        style={styles.icon}></Icon>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={setValue}
        style={{color: 'black'}}
        placeholderTextColor="#3e70b2"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
export default InputField;
