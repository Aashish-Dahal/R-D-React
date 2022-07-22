import React from 'react';
import {styles} from '../../utils/style/Styles';
import * as Color from '../../utils/style/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, TextInput, Text} from 'react-native';
import {Controller} from 'react-hook-form';
const InputField = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  iconName,
}) => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[styles.inputCard, {borderColor: error ? 'red' : 'white'}]}>
            <Icon
              name={iconName}
              size={20}
              color={Color.darkBlue}
              style={styles.icon}></Icon>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={{color: 'black'}}
              placeholderTextColor="#3e70b2"
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text
              style={{
                color: 'red',
                alignSelf: 'stretch',
                marginLeft: 40,
                marginTop: 4,
              }}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
    // </View>
  );
};
export default InputField;
