import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Intro: undefined; 
  Main: undefined;
};

export type IntroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Intro'>;
export type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;


