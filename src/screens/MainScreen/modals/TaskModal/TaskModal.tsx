import React, {useState} from 'react';
import {Modal, View, Text} from 'react-native';
import {Appbar} from 'react-native-paper';
import colors from '../../../../constants/colors';
import {Task} from '../../types';
import EditIcon from '../../../../assets/svg/EditIcon';
import TrashIcon from '../../../../assets/svg/TrashIcon';
import DoneIcon from '../../../../assets/svg/DoneIcon';
import ConfirmDeleteModal from '../ConfirmDeleteModal/ConfirmDeleteModal';
import Input from '../../../../components/Input';
import {initialColumns} from '../../constants';
import Select from '../../../../components/Select';
import {styles} from './styles';

interface TaskModalProps {
  visible: boolean;
  task: Task;
  onClose: () => void;
  onEdit: (changedTask: Task) => void;
  onDelete: () => void;
  childModalVisible: boolean;
  handleConfirmDeleteModal: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({
  visible,
  task,
  onClose,
  onEdit,
  onDelete,
  childModalVisible,
  handleConfirmDeleteModal,
}) => {
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedColumnName, setEditedColumnName] = useState<string>(
    task.columnName,
  );

  const columnOptions = initialColumns.map(column => ({
    label: column,
    value: column,
  }));

  const handleSaveTask = () => {
    const updatedTask: Task = {
      ...task,
      title: editedTitle,
      description: editedDescription,
      columnName: editedColumnName,
    };
    onEdit(updatedTask);
    setIsEditing(false);
  };

  const handleEditMode = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
  };

  const renderHeader = () => {
    return (
      <Appbar.Header mode="center-aligned" style={styles.appHeader}>
        <Appbar.BackAction
          iconColor={colors.raisinBlack}
          size={20}
          onPress={isEditing ? handleCancelEdit : onClose}
        />
        <Appbar.Content color={colors.raisinBlack} title={task.columnName} />

        {isEditing ? (
          <Appbar.Action icon={() => <DoneIcon />} onPress={handleSaveTask} />
        ) : (
          <Appbar.Action icon={EditIcon} onPress={handleEditMode} />
        )}

        {!isEditing && (
          <Appbar.Action
            icon={() => (
              <TrashIcon width={20} height={20} color={colors.error} />
            )}
            style={{marginTop: 11}}
            onPress={handleConfirmDeleteModal}
          />
        )}
      </Appbar.Header>
    );
  };

  const renderDescription = () => {
    if (task.description) {
      return (
        <View style={styles.eachContent}>
          <Text style={styles.textHeading}>Описание</Text>
          <Text style={styles.modalDescription}>{task.description}</Text>
        </View>
      );
    }
    return null;
  };

  const renderMainView = () => {
    if (isEditing) {
      return (
        <>
          <Text style={styles.modalTitle}>
            Редактируйте детали задачи ниже.
          </Text>
          <Input
            value={editedTitle}
            onChangeText={(text: string) => setEditedTitle(text)}
            placeholder="Введите значимое название задачи."
            label="Название"
          />
          <Input
            value={editedDescription}
            onChangeText={(text: string) => setEditedDescription(text)}
            placeholder="Опишите задачу подробно."
            label="Описание"
            multiline
          />

          <Select
            data={columnOptions}
            value={editedColumnName}
            setValue={setEditedColumnName}
            label="Переместить"
          />

          <Text style={styles.detailsText}>
            Нажмите 'Готово', чтобы сохранить изменения.
          </Text>
        </>
      );
    }
    return (
      <View style={styles.content}>
        <View style={styles.eachContent}>
          <Text style={styles.textHeading}>Название</Text>
          <Text style={styles.modalTitle}>{task.title}</Text>
        </View>
        {renderDescription()}
      </View>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}>
      {renderHeader()}
      <View style={styles.modalContainer}>
        <View style={styles.headingContainer}>{renderMainView()}</View>
      </View>
      <ConfirmDeleteModal
        visible={childModalVisible}
        onClose={handleConfirmDeleteModal}
        onConfirm={onDelete}
      />
    </Modal>
  );
};

export default TaskModal;
