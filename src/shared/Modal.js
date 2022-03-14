import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Modal from 'react-native-modal';
import {hp, wp} from '../constants/utils';
import {COLORS} from '../constants';

const ModalComponent = ({
  isVisible,
  onPressCancel,
  onChangeAuthor,
  onPressSubmit,
  onChangeTitle,
  title,
  author,
  isComment,
  comment,
  onAddComment,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      avoidKeyboard={true}
      backdropColor={COLORS.orange}
      backdropOpacity={0.4}
      coverScreen>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          {isComment ? (
            <Input
              placeholder="Comment"
              onChangeText={onAddComment}
              value={comment}
            />
          ) : (
            <View>
              <Input
                placeholder="Author"
                onChangeText={onChangeAuthor}
                value={author}
              />

              <Input
                placeholder="Title"
                onChangeText={onChangeTitle}
                value={title}
              />
            </View>
          )}
          <View style={styles.buttonContainer}>
            <Button
              title="Cancel"
              type="outline"
              raised
              containerStyle={{width: wp(100)}}
              onPress={onPressCancel}
            />
            <Button
              title="Submit"
              containerStyle={{width: wp(100)}}
              onPress={onPressSubmit}
              buttonStyle={{backgroundColor: COLORS.background}}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(20),
  },
  boxContainer: {
    width: wp(300),
    backgroundColor: COLORS.white,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: hp(5),
    paddingHorizontal: wp(20),
    paddingVertical: hp(20),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export default ModalComponent;
