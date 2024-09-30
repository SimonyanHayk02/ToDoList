import {Dimensions, StyleSheet} from 'react-native';
import colors from "../../../../constants/colors";

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.ghostWhite,
    borderRadius: 10,
    padding: 15,
    gap: 10,
    alignSelf: 'flex-start',
  },
  textInputContainer: {
    width: '100%',
  },
  mainAddCardContainer: {
    gap: 10,
    width: '100%',
  },
  inputContainer: {
    marginBottom: 10,
    height: 5,
    width: '100%',
    padding: 10,
  },
  input: {
    backgroundColor: colors.white,
    fontSize: 12,
    height: 40,
    width: '100%',
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: colors.blue600,
    borderWidth: 2,
  },
  taskList: {
    maxHeight: screenHeight - 400,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  cancelButton: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.blue600,
  },
  saveButton: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.blue600,
  },
  addCardContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  addCardText: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.blue600,
  },
  footer: {
    alignItems: 'flex-start',
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
    marginBottom: 10,
  },
  errorText: {
    color: colors.error,
    fontSize: 12,
    marginTop: 5,
  },
});