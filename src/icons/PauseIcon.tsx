import React from 'react';
import Svg, { Rect } from 'react-native-svg';

const PauseIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Rect width={5} height={18} x={5.5} y={3} fill="#fff" rx={2} />
    <Rect width={5} height={18} x={13.5} y={3} fill="#fff" rx={2} />
  </Svg>
);
export default PauseIcon;
