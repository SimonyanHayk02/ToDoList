import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import colors from '../../../../constants/colors';
import PlusIcon from '../../../../assets/svg/PlusIcon';
import {Task} from '../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCard from '../TaskCard';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import {HelperText} from 'react-native-paper';
import Input from '../../../../components/Input';
import { styles } from './styles';

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  onApply: () => void;
  onTaskDrop: (data: Task[]) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({
  title,
  tasks,
  onApply,
  onTaskDrop,
}) => {
  const [isAddingCard, setIsAddingCard] = useState<boolean>(false);
  const [isTitleEmpty, setIsTitleEmpty] = useState<boolean>(false);
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');

  const isDoneColumn = title === 'Backlog';

  const handleAddTask = () => {
    setIsAddingCard(!isAddingCard);
    setNewTaskTitle('');
    setIsTitleEmpty(false);
  };

  const cancelAddTask = () => {
    handleAddTask();
  };

  const handleTitleChange = (text: string) => {
    setNewTaskTitle(text);
    if (text.length > 0) {
      setIsTitleEmpty(false);
    }
  };

  const addTask = async () => {
    if (!newTaskTitle) {
      setIsTitleEmpty(true);
    } else {
      try {
        const tasksFromStorage = await AsyncStorage.getItem('tasks');
        let currentTasks: Task[] = [];

        if (tasksFromStorage !== null) {
          currentTasks = JSON.parse(tasksFromStorage) as Task[];
        }

        const newTask: Task = {
          id: Date.now().toString(),
          title: newTaskTitle,
          columnName: title,
        };

        currentTasks.push(newTask);
        await AsyncStorage.setItem('tasks', JSON.stringify(currentTasks));
        handleAddTask();
        setIsTitleEmpty(false);
        onApply();
      } catch (error) {
        console.error('Error adding task to storage:', error);
      }
    }
  };

  const renderFooter = () => {
    if (isDoneColumn) {
      if (isAddingCard) {
        return (
          <View style={styles.mainAddCardContainer}>
            <View style={styles.textInputContainer}>
              <Input
                value={newTaskTitle}
                onChangeText={(text: string) => handleTitleChange(text)}
                placeholder="Введите название задачи"
              />
              {isTitleEmpty && (
                <HelperText type="error" visible={isTitleEmpty}>
                  Название не должно быть пустым.
                </HelperText>
              )}
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={cancelAddTask}>
                <Text style={styles.cancelButton}>Отмена</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={addTask}>
                <Text style={styles.saveButton}>Добавить</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }
      return (
        <TouchableOpacity
          style={styles.addCardContainer}
          onPress={handleAddTask}>
          <PlusIcon width={16} height={16} color={colors.blue600} />
          <Text style={styles.addCardText}>Добавить карточку</Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  const handleDragEnd = ({data}: {data: Task[]}) => {
    onTaskDrop(data);
  };

  const renderTask = ({item, drag, isActive}: RenderItemParams<Task>) => {
    return (
      <TouchableOpacity
        onLongPress={drag}
        disabled={isActive}
        style={[isActive && styles.dragging]}>
        <TaskCard task={item} onApply={onApply} drag={drag} />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <DraggableFlatList
        data={tasks}
        showsVerticalScrollIndicator={false}
        onDragEnd={handleDragEnd}
        keyExtractor={item => item.id}
        renderItem={renderTask}
        style={styles.taskList}
      />
      <View style={styles.footer}>{renderFooter()}</View>
    </ScrollView>
  );
};



export default TaskColumn;
