import {StyleSheet} from 'react-native';
import colors from "../../../../constants/colors";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: colors.raisinBlack,
  },
  modalDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: colors.manatee,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    gap:10
  },
  cancelButton: {
    flex: 1,
    borderColor: colors.blue600
  },
  deleteButton:{
    flex: 1,
    borderColor: colors.error
  }
});