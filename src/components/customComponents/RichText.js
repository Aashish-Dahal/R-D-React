import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

const RichText = ({
  heading,
  subHeading,
  flexDirection,
  headingStyle,
  subHeadingStyle,
  onPress,
  disabled = true,
}) => {
  return (
    <View style={{flexDirection: flexDirection}}>
      <Text style={headingStyle}>{heading}</Text>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Text style={subHeadingStyle}> {subHeading} </Text>
      </TouchableOpacity>
    </View>
  );
};
export default RichText;
