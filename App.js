import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './src/navigation/navigation';
import {Provider} from 'react-redux';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
