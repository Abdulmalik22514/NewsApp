import axios from 'axios';
import {Alert} from 'react-native';

const baseUrl = 'https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane/news';

const model = {
  state: {
    news: [],
    loading: false,
    comments: [],
    images: [],
  }, // initial state

  reducers: {
    // handle state changes with pure functions
    //loading state controllers
    IS_LOADING(state) {
      return {
        ...state,
        loading: true,
      };
    },
    NOT_LOADING(state) {
      return {
        ...state,
        loading: false,
      };
    },
    FETCH_NEWS_SUCCESS(state, payload) {
      return {
        ...state,
        news: [...payload],
      };
    },
    FETCH_NEWS_COMMENTS(state, payload) {
      return {
        ...state,
        comments: payload,
      };
    },
    FETCH_NEWS_IMAGES(state, payload) {
      return {
        ...state,
        images: payload,
      };
    },
  },

  effects: dispatch => ({
    async fetchNews() {
      dispatch.model.IS_LOADING();
      await axios
        .get(baseUrl)
        .then(response => {
          dispatch.model.FETCH_NEWS_SUCCESS(response.data);
        })
        .catch(error => Alert.alert('Error', error))
        .finally(() => dispatch.model.NOT_LOADING());
    },

    async singleNewsComments(id) {
      dispatch.model.IS_LOADING();
      await axios
        .get(`${baseUrl}/${id}/comments`)
        .then(response => {
          dispatch.model.FETCH_NEWS_COMMENTS(response.data);
        })
        .catch(error => Alert.alert('Error', error))
        .finally(() => dispatch.model.NOT_LOADING());
    },

    async singleNewsImages(id) {
      dispatch.model.IS_LOADING();
      await axios
        .get(`${baseUrl}/${id}/images`)
        .then(response => {
          console.log('images', response.data);
          // Pick out the image url
          const NewsImages = response.data?.map(item => item.image);
          dispatch.model.FETCH_NEWS_IMAGES(NewsImages);
        })
        .catch(error => Alert.alert('Error', error))
        .finally(() => dispatch.model.NOT_LOADING());
    },
  }),
};

export default model;
