import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../constants';
import {hp} from '../constants/utils';
import Button from './Button';

const Header = ({title, leftView, leftTitle, onPress}) => {
  return (
    <View style={styles.header}>
      {leftView ? <Text>{leftTitle}</Text> : <View />}
      <Text style={styles.headline}>{title}</Text>
      <Button title="Create" onPress={onPress} />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: hp(20),
    backgroundColor: COLORS.lightBackground,
    paddingVertical: hp(20),
  },
  headline: {
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    color: 'white',
  },
  createButton: {
    backgroundColor: COLORS.purple,
    width: 60,
    height: 45,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
  },
});

export default Header;
