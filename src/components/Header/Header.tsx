import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {Appbar} from 'react-native-paper';

interface HeaderProps {
  title: string;
}
const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <Appbar.Header mode="center-aligned" style={styles.container}>
      <Appbar.Content title={title} titleStyle={styles.title}/>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.black,
  },
});
export default Header;
