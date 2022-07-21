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
  setValue,
  placeholder,
  secureTextEntry,
  iconName,
}) => {
  return (
    // <View style={styles.inputCard}>
    //   <Icon
    //     name={iconName}
    //     size={20}
    //     color={Color.darkBlue}
    //     style={styles.icon}></Icon>

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
              onBlur={onBlur}
              placeholder={placeholder}
              onChangeText={setValue}
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
