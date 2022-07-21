import React from 'react';
import {Image} from 'react-native';

const ImageBox = ({uri = null, height = null, width = null}) => {
  return (
    <Image
      style={{
        height: height === null ? 180 : height,
        width: width === null ? 180 : width,
      }}
      source={
        uri === null
          ? {
              uri: 'https://cdn.pixabay.com/photo/2014/12/22/00/07/tree-576847__480.png',
            }
          : {uri: uri}
      }
    />
  );
};
export default ImageBox;
