import React from 'react';
import {Provider} from 'react-redux';

import {Navigator} from './navigation';
import {createStore} from './config/redux';

const store = createStore();

export const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
