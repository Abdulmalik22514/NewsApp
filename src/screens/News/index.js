import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import store from '../../store/store';
import {Container} from '../../shared/Container';
import NewsCard from '../../shared/NewsCard';
import Header from '../../shared/Header';
import Loader from '../../shared/Loader';
import ModalComponent from '../../shared/Modal';
import uuid from 'uuidv4';

const {dispatch} = store;

const HomePage = () => {
  const {news, loading} = useSelector(state => state.model);
  const [isModalVisible, setModalVisible] = useState(false);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    dispatch.model.fetchNews();
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const createNews = () => {
    const data = {
      author,
      title,
      id: uuid(),
    };
    setModalVisible(false);
    setAuthor('');
    setTitle('');
    dispatch.model.addNews(data);
  };

  const _renderItem = ({item}) => {
    return <NewsCard title={item.title} id={item.id} author={item.author} />;
  };

  return (
    <>
      <Container>
        <Header title="HEADLINES" onPress={toggleModal} buttonTitle="Create" />
        <View>
          <FlatList data={news} renderItem={_renderItem} />
        </View>
      </Container>
      <ModalComponent
        isVisible={isModalVisible}
        title={title}
        author={author}
        onPressCancel={toggleModal}
        onChangeAuthor={setAuthor}
        onChangeTitle={setTitle}
        onPressSubmit={createNews}
      />
      {loading && <Loader />}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
  },
});

export default HomePage;
