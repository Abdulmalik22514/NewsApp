import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';
import {hp, wp} from '../constants/utils';
import {useNavigation} from '@react-navigation/native';

const NewsCard = ({title, id, author}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('NewsContent', {id})}
      activeOpacity={0.8}>
      <Text style={styles.title}>{title}</Text>
      <Text>{author}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(17),
    paddingVertical: hp(15),
    borderRadius: 7,
    marginBottom: hp(15),
    justifyContent: 'center',
    paddingHorizontal: wp(15),
    shadowColor: COLORS.lightBackground,
    elevation: 5,
  },
  title: {
    fontFamily: 'Roboto-MediumItalic',
    fontSize: 20,
  },
});

export default NewsCard;
