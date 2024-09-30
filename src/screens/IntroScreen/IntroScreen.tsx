import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import {IntroScreenNavigationProp} from '../../types/navigationTypes';
import MainIcon from '../../assets/svg/MainIcon';
import {styles} from './styles';

interface IntroScreenProps {
  navigation: IntroScreenNavigationProp;
}

const IntroScreen: React.FC<IntroScreenProps> = ({navigation}) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        navigation.navigate('Main');
      }, 1000);
    });
  }, [navigation, scale, opacity]);

  return (
    <View style={styles.container}>
      <Animated.View style={{opacity, transform: [{scale}]}}>
        <MainIcon width={150} height={150} />
      </Animated.View>
    </View>
  );
};

export default IntroScreen;
