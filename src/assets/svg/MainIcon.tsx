import React from 'react';
import {Svg, Path, Ellipse} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
}

const MainIcon: React.FC<Props> = ({width = 100, height = 100}) => (
  <Svg viewBox="0 0 501.333 501.333" width={width} height={height}>
    <Path d="M445.867 40h55.467v102.4h-55.467z" fill="#fec656" />
    <Path d="M445.867 153.067h55.467v102.4h-55.467z" fill="#60c3ab" />
    <Path d="M445.867 267.2h55.467v102.4h-55.467z" fill="#637888" />
    <Path
      d="M437.333.533h-380.8C39.466.533 25.6 13.333 25.6 28.266v444.8c0 16 13.867 27.733 30.933 27.733h380.8c17.067 0 30.933-12.8 30.933-27.733v-444.8C469.333 13.333 455.467.533 437.333.533z"
      fill="#f16d6e"
    />
    <Ellipse cx={54.4} cy={69.867} rx={13.867} ry={20.267} fill="#e14a4a" />
    <Path
      d="M46.933 57.067H13.867C6.4 57.067 0 62.4 0 69.867c0 6.4 6.4 12.8 13.867 12.8H48c7.467 0 13.867-5.333 13.867-12.8-1.067-7.467-6.4-12.8-14.934-12.8z"
      fill="#637888"
    />
    <Ellipse cx={54.4} cy={142.4} rx={13.867} ry={20.267} fill="#e14a4a" />
    <Path
      d="M46.933 129.6H13.867C6.4 129.6 0 134.933 0 142.4c0 6.4 6.4 12.8 13.867 12.8H48c7.467 0 13.867-5.333 13.867-12.8-1.067-7.467-6.4-12.8-14.934-12.8z"
      fill="#637888"
    />
    <Ellipse cx={54.4} cy={214.933} rx={13.867} ry={20.267} fill="#e14a4a" />
    <Path
      d="M46.933 202.133H13.867C6.4 202.133 0 207.467 0 214.933c0 6.4 6.4 12.8 13.867 12.8H48c7.467 0 13.867-5.333 13.867-12.8-1.067-6.4-6.4-12.8-14.934-12.8z"
      fill="#637888"
    />
    <Ellipse cx={54.4} cy={287.467} rx={13.867} ry={20.267} fill="#e14a4a" />
    <Path
      d="M46.933 275.733H13.867C6.4 275.733 0 281.067 0 288.533c0 6.4 6.4 12.8 13.867 12.8H48c7.467 0 13.867-5.333 13.867-12.8-1.067-7.466-6.4-12.8-14.934-12.8z"
      fill="#637888"
    />
    <Ellipse cx={54.4} cy={360} rx={13.867} ry={20.267} fill="#e14a4a" />
    <Path
      d="M46.933 348.267H13.867C6.4 348.267 0 353.6 0 361.067c0 6.4 6.4 12.8 13.867 12.8H48c7.467 0 13.867-5.333 13.867-12.8-1.067-7.467-6.4-12.8-14.934-12.8z"
      fill="#637888"
    />
    <Ellipse cx={54.4} cy={432.533} rx={13.867} ry={20.267} fill="#e14a4a" />
    <Path
      d="M46.933 420.8H13.867C6.4 420.8 0 426.133 0 433.6c0 6.4 6.4 12.8 13.867 12.8H48c7.467 0 13.867-5.333 13.867-12.8-1.067-7.467-6.4-12.8-14.934-12.8z"
      fill="#637888"
    />
  </Svg>
);

export default MainIcon;
