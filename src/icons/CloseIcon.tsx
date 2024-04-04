import React from 'react';
import Svg, { G, Path, Rect, Circle, Defs, ClipPath } from 'react-native-svg';

const CloseIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <G stroke="#56ACDC" clipPath="url(#a)">
      <Path strokeOpacity={0.24} strokeWidth={2} d="M1 1h22v22H1z" />
      <Rect
        width={17.95}
        height={19.95}
        x={3.025}
        y={2.025}
        strokeOpacity={0.48}
        strokeWidth={0.05}
        rx={0.975}
      />
      <Rect
        width={19.95}
        height={17.95}
        x={2.025}
        y={3.025}
        strokeOpacity={0.48}
        strokeWidth={0.05}
        rx={0.975}
      />
      <Rect
        width={19.95}
        height={20.95}
        x={2.025}
        y={1.525}
        strokeOpacity={0.48}
        strokeWidth={0.05}
        opacity={0.2}
        rx={0.975}
      />
      <Rect
        width={20.95}
        height={17.95}
        x={1.525}
        y={3.025}
        strokeOpacity={0.48}
        strokeWidth={0.05}
        opacity={0.2}
        rx={0.975}
      />
      <Rect
        width={18.95}
        height={18.95}
        x={2.525}
        y={2.525}
        strokeOpacity={0.48}
        strokeWidth={0.05}
        rx={0.975}
      />
      <Rect
        width={16.95}
        height={16.95}
        x={3.525}
        y={3.525}
        strokeOpacity={0.48}
        strokeWidth={0.05}
        opacity={0.6}
        rx={0.975}
      />
      <Circle
        cx={12}
        cy={12}
        r={9.975}
        strokeOpacity={0.48}
        strokeWidth={0.05}
      />
    </G>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3.75 3.75 8 8m8 8-8-8m0 0-8 8 16-16"
    />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CloseIcon;
