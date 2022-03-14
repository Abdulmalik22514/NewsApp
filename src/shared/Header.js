import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../constants';
import {hp, wp} from '../constants/utils';
import Button from './Button';

const Header = ({title, leftTitle, onPress, buttonTitle}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      {leftTitle ? (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('News')}>
          <Text style={styles.backText}>{leftTitle}</Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <Text style={styles.headline}>{title}</Text>
      <Button title={buttonTitle} onPress={onPress} />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(16),
    backgroundColor: COLORS.lightBackground,
    paddingVertical: hp(16),
  },
  headline: {
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
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
  backText: {
    color: COLORS.white,
    fontFamily: 'Roboto-Regular',
    fontSize: 17,
  },
});

export default Header;
