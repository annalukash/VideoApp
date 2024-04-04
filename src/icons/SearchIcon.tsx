import React from 'react';
import Svg, { G, Path, Rect, Circle, Defs, ClipPath } from 'react-native-svg';

const SearchIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
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
    <Circle
      cx={10.985}
      cy={10.987}
      r={7}
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      transform="rotate(-45 10.985 10.987)"
    />
    <Path
      fill="#F5F5F5"
      d="M15.14 16.722a1.125 1.125 0 0 1 1.58-1.58l4.363 3.445a1.778 1.778 0 1 1-2.498 2.498l-3.445-4.363Z"
    />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SearchIcon;
