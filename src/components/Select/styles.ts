import {StyleSheet} from 'react-native';
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    gap:10
  },
  label: {
    fontSize: 14,
    color: colors.manatee,
  },
  dropdown: {
    height: 50,
    paddingHorizontal: 8,
    paddingLeft: 20,
    borderRadius: 8,
    width: '100%',
    backgroundColor: colors.white,
    padding: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});