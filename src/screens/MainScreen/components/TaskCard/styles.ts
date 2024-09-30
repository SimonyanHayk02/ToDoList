import {StyleSheet} from 'react-native';
import colors from "../../../../constants/colors";

export const styles = StyleSheet.create({
  mainContainer: {
    margin: 5
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 10
  },
  contentContainer: {
    flexDirection: 'column',
  },
  cardHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.raisinBlack,
  },
  description: {
    fontSize: 12,
    color: colors.coolGray,
    marginTop: 5,
  },
});