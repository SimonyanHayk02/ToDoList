import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
}

const ThreeDotsVerticalIcon: React.FC<Props> = ({ width = 24, height = 24 }) => (
  <Svg viewBox="0 0 16 16" width={width} height={height}>
    <Path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
  </Svg>
);

export default ThreeDotsVerticalIcon;
