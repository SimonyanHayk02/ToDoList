import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from '../screens/IntroScreen/IntroScreen';
import MainScreen from '../screens/MainScreen/MainScreen';
import { RootStackParamList } from '../types/navigationTypes';

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainStack;
