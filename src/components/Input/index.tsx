import React from 'react';
import {TextInput, View,Text} from 'react-native';
import { styles } from './styles';

interface Props {
  value?: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  multiline?: boolean;
  label?:string
}
const Input: React.FC<Props> = ({
  value,
  onChangeText,
  placeholder,
  multiline,
  label
}) => {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.textInput}
        multiline={multiline}
      />
    </View>
  );
};

export default Input;
