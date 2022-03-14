import React, {useEffect} from 'react';
import {ScrollView, View, Text, FlatList} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {useSelector} from 'react-redux';
import {Container} from '../../shared/Container';
import Header from '../../shared/Header';
import store from '../../store/store';
import {NewsContentStyles as styles} from './styles';

const {dispatch} = store;

const NewsContent = ({route}) => {
  const {comments, images} = useSelector(state => state.model);

  useEffect(() => {
    dispatch.model.singleNewsComments(id);
    dispatch.model.singleNewsImages(id);
  }, [id]);

  const {id, title} = route.params;

  const _renderItem = ({item}) => {
    return (
      <View style={styles.commentContainer}>
        <Text style={styles.comments}>{item.comment}</Text>
      </View>
    );
  };

  const EmptyComment = () => {
    return <Text style={styles.emptyComment}>No comments to show</Text>;
  };

  return (
    <>
      <Container>
        <Header leftTitle="Back" title="NEWS DETAILS" buttonTitle="Comment" />
        <Text style={styles.title}>{title}</Text>
        <ScrollView>
          <SliderBox
            images={images}
            sliderBoxHeight={300}
            dotColor="yellow"
            inactiveDotColor="#90A4AE"
            autoplay
            circleLoop
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
    </>
  );
};

export default NewsContent;
