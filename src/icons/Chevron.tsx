import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Chevron = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8 4 8 8-8 8"
    />
  </Svg>
);

export default Chevron;
