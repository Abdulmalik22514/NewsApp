import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';
import {hp, wp} from '../../constants/utils';

export const NewsContentStyles = StyleSheet.create({
  commentHeading: {
    fontFamily: 'Roboto-MediumItalic',
    fontSize: 22,
    marginVertical: hp(10),
    marginLeft: wp(12),
  },
  emptyComment: {
    fontSize: 25,
    fontFamily: 'Roboto-Italic',
    alignSelf: 'center',
    marginTop: hp(7),
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: COLORS.grey,
    marginHorizontal: wp(12),
    marginBottom: hp(10),
  },
  title: {
    fontFamily: 'Roboto-Italic',
    fontSize: 20,
    marginLeft: wp(10),
    marginVertical: hp(10),
  },
  commentContainer: {
    marginHorizontal: wp(18),
    paddingHorizontal: wp(10),
    backgroundColor: COLORS.grey,
    marginBottom: hp(20),
    borderRadius: 5,
  },
  comments: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
});
