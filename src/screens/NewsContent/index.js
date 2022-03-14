import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, FlatList, TextInput} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {useSelector} from 'react-redux';
import {Container} from '../../shared/Container';
import Header from '../../shared/Header';
import ModalComponent from '../../shared/Modal';
import store from '../../store/store';
import {NewsContentStyles as styles} from './styles';

const {dispatch} = store;

const NewsContent = ({route}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const {comments, images} = useSelector(state => state.model);

  useEffect(() => {
    dispatch.model.singleNewsComments(id);
    dispatch.model.singleNewsImages(id);
  }, [id]);

  const {id, title} = route.params;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const _renderItem = ({item}) => {
    return (
      <View style={styles.commentContainer}>
        <TextInput style={styles.comments} value={item.comment} />
      </View>
    );
  };

  const EmptyComment = () => {
    return <Text style={styles.emptyComment}>No comments to show</Text>;
  };

  return (
    <>
      <Container>
        <Header
          leftTitle="Back"
          title="NEWS DETAILS"
          buttonTitle="Comment"
          onPress={toggleModal}
        />
        <Text style={styles.title}>{title}</Text>
        <ScrollView>
          <SliderBox
            images={images}
            sliderBoxHeight={300}
            dotColor="yellow"
            inactiveDotColor="white"
            autoplay
          />
          <Text style={styles.commentHeading}>Comments</Text>
          <View style={styles.separator} />
          <FlatList
            data={comments}
            renderItem={_renderItem}
            keyExtractor={(_, index) => index.toString()}
            ListEmptyComponent={EmptyComment()}
          />
        </ScrollView>
      </Container>
      <ModalComponent
        isComment
        isVisible={isModalVisible}
        comment={comments}
        onPressCancel={toggleModal}
        onPressSubmit={toggleModal}
      />
    </>
  );
};

export default NewsContent;
