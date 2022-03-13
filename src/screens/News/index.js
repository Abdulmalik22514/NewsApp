import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import store from '../../store/store';
import {Container} from '../../shared/Container';
import NewsCard from '../../components/NewsCard';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ModalComponent from '../../components/Modal';

const {dispatch} = store;

const HomePage = () => {
  const {news, loading} = useSelector(state => state.model);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    dispatch.model.fetchNews();
  }, []);

  const _renderItem = ({item}) => {
    return <NewsCard title={item.title} id={item.id} />;
  };

  return (
    <>
      <Container>
        <Header title="HEADLINES" openModal={toggleModal} />
        <KeyboardAwareScrollView>
          <FlatList data={news} renderItem={_renderItem} />
        </KeyboardAwareScrollView>
      </Container>
      <ModalComponent isVisible={isModalVisible} onPressCancel={toggleModal} />
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
