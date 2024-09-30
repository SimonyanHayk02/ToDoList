import React from 'react';
import {Modal, View, Text} from 'react-native';
import colors from '../../../../constants/colors';
import { Button } from 'react-native-paper';
import { styles } from './styles';

interface ConfirmDeleteModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  visible,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Вы уверены?</Text>
          <Text style={styles.modalDescription}>
            Вы действительно хотите удалить эту задачу?
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              mode="outlined"
              onPress={onClose}
              accessibilityLabel="Cancel deletion"
              style={styles.cancelButton}
              buttonColor={colors.white}
              textColor={colors.blue600}>
              Отмена
            </Button>
            <Button
              mode="outlined"
              onPress={onConfirm}
              accessibilityLabel="Confirm deletion"
              buttonColor={colors.white}
              textColor={colors.error}
              style={styles.deleteButton}>
              Удалить
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};



export default ConfirmDeleteModal;
