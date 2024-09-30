// TaskCard.tsx
import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import {Card} from 'react-native-paper';
import {Task} from '../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskModal from '../../modals/TaskModal/TaskModal';
import {styles} from './styles';

interface TaskCardProps {
  task: Task;
  onApply: () => void;
  drag: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({task, onApply, drag}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [isDeleteModalVisible, setDeleteModalVisible] =
    useState<boolean>(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    onApply();
    setModalVisible(false);
  };

  const handleConfirmDeleteModal = () => {
    setDeleteModalVisible(!isDeleteModalVisible);
  };

  const renderContent = () => (
    <View style={styles.contentContainer}>
      <View style={styles.cardHeading}>
        <Text style={styles.title}>{task.title}</Text>
      </View>
      <Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">
        {task.description}
      </Text>
    </View>
  );

  const deleteTaskFromStorage = async () => {
    try {
      const tasksFromStorage = await AsyncStorage.getItem('tasks');
      let currentTasks: Task[] = [];

      if (tasksFromStorage !== null) {
        currentTasks = JSON.parse(tasksFromStorage) as Task[];
      }

      const filteredTasks = currentTasks.filter(tk => tk.id !== task.id);
      await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks));

      onApply();
    } catch {}
  };

  const editTaskInStorage = async (changedTask: Task) => {
    try {
      const tasksFromStorage = await AsyncStorage.getItem('tasks');
      let currentTasks: Task[] = [];

      if (tasksFromStorage !== null) {
        currentTasks = JSON.parse(tasksFromStorage) as Task[];
      }

      const taskIndex = currentTasks.findIndex(tk => tk.id === task.id);
      if (taskIndex !== -1) {
        currentTasks[taskIndex] = {...task, ...changedTask};
      }

      await AsyncStorage.setItem('tasks', JSON.stringify(currentTasks));
      onApply();
    } catch (error) {
      console.error('Error editing task in storage:', error);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity onPress={handleOpenModal} onLongPress={drag}>
        <Card style={styles.card}>
          <Card.Content>{renderContent()}</Card.Content>
        </Card>
      </TouchableOpacity>
      <TaskModal
        visible={modalVisible}
        task={task}
        onDelete={deleteTaskFromStorage}
        onClose={handleCloseModal}
        onEdit={editTaskInStorage}
        childModalVisible={isDeleteModalVisible}
        handleConfirmDeleteModal={handleConfirmDeleteModal}
      />
    </SafeAreaView>
  );
};

export default TaskCard;
