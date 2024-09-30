import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from '../../components/Header/Header';
import {Task} from './types';
import TaskColumn from './components/TaskColumn';
import {initialColumns} from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Swiper from 'react-native-swiper';
import {styles} from './styles';

const MainScreen: React.FC = ({}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasksFromStorage();
  }, []);

  const getTasksFromStorage = async (): Promise<void> => {
    try {
      const tasksFromStorage = await AsyncStorage.getItem('tasks');
      if (tasksFromStorage !== null) {
        const parsedTasks: Task[] = JSON.parse(tasksFromStorage);
        setTasks(parsedTasks);
      }
    } catch (error) {
      console.error('Error retrieving tasks from storage:', error);
    }
  };

  const getTasksByColumn = (column: string): Task[] => {
    return tasks.filter(task => task.columnName === column);
  };

  const saveTasksToStorage = async (updatedTasks: Task[]) => {
    try {
      const newTaskIds = updatedTasks.map(task => task.id);

      const filteredTasks = tasks.filter(task => !newTaskIds.includes(task.id));
      const indexToInsert = tasks.findIndex(task => task.id === newTaskIds[0]);

      filteredTasks.splice(indexToInsert, 0, ...updatedTasks);
      AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks));
      setTasks(filteredTasks);
    } catch (error) {
      console.error('Error saving tasks to storage:', error);
    }
  };

  const handleTaskDrop = (data: Task[]) => {
    saveTasksToStorage(data);
  };

  const renderTaskColumns = useCallback(() => {
    return initialColumns.map(column => (
      <View key={column} style={styles.tasksContainer}>
        <TaskColumn
          title={column}
          tasks={getTasksByColumn(column)}
          onApply={getTasksFromStorage}
          onTaskDrop={(data: Task[]) => handleTaskDrop(data)}
        />
      </View>
    ));
  }, [tasks]);

  return (
    <>
      <Header title="To-Do List" />
      <SafeAreaView style={styles.safeAreaView}>
        <Swiper
          loop={false}
          showsPagination={true}
          paginationStyle={styles.pagination}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}>
          {renderTaskColumns()}
        </Swiper>
      </SafeAreaView>
    </>
  );
};

export default MainScreen;
