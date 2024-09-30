import React from 'react';
import {Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import { styles } from './styles';

interface SelectProps {
  data: {label: string; value: string}[];
  value: string;
  setValue: (value: string) => void;
  label?: string;
}

const Select: React.FC<SelectProps> = ({data, value, setValue, label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
    </View>
  );
};

export default Select;


