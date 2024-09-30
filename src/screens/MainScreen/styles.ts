import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  tasksContainer: {
    padding: 10,
  },
  scrollContent: {
    flexDirection: 'row',
    padding: 10,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
    height: screenHeight * 0.8,
    padding: 20,
  },
  pagination: {
    bottom: 10,
  },
  dot: {
    backgroundColor: colors.gray72,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: colors.blue600,
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
});