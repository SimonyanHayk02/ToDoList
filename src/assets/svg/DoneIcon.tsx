import React from 'react';
import {Svg, Path, Defs, Stop, LinearGradient} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
}

const DoneIcon: React.FC<Props> = ({width = 20, height = 20}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <Defs>
      <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor="#FFFFFF" />
        <Stop offset="100%" stopColor="#000000" />
      </LinearGradient>
    </Defs>
    <Path
      d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Zm-.48 17L6 12.79l1.83-2.37L11.14 13l4.51-5.08 2.24 2Z"
      fill="url(#grad)"
    />
  </Svg>
);

export default DoneIcon;
