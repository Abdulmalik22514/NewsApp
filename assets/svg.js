import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const BackArrow = props => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M4.25 12.2744L19.25 12.2744"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};