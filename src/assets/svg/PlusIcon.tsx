import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const PlusIcon: React.FC<Props> = ({ width = 24, height = 24, color = '#000' }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 455 455"
  >
    <Path
      d="M455 212.5H242.5V0h-30v212.5H0v30h212.5V455h30V242.5H455z"
      fill={color}
    />
  </Svg>
);

export default PlusIcon;
