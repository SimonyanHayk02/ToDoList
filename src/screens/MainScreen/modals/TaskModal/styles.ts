import {StyleSheet} from 'react-native';
import colors from "../../../../constants/colors";

export const styles = StyleSheet.create({
  appHeader: {
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  content: {
    gap: 20,
  },
  eachContent: {
    gap: 10,
  },
  textHeading: {
    fontSize: 14,
    color: colors.manatee,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  headingContainer: {
    flexDirection: 'column',
    gap: 10,
  },
  modalTitle: {
    fontSize: 20,
    color: colors.raisinBlack,
  },
  modalDescription: {
    fontSize: 18,
    color: colors.raisinBlack,
  },
  detailsText: {
    fontSize: 14,
    color: colors.manatee,
  },
  editField: {
    borderRadius: 8,
    width: '100%',
    height: 50,
    backgroundColor: colors.white,
    padding: 10,
    shadowColor: colors.raisinBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  formContainer: {
    flexDirection: 'column',
    gap: 3,
  },
  dropdownTrigger: {
    padding: 10,
    borderColor: colors.gray72,
    borderWidth: 1,
    borderRadius: 4,
    textAlign: 'center',
  },
});