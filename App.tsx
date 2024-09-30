import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainStack from './src/navigation/mainStack';
import {Provider as PaperProvider} from 'react-native-paper';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

const App = (): React.JSX.Element => {
  return (
    <PaperProvider>
      <NavigationContainer>
          <MainStack />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
