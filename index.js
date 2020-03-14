import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {createStore} from 'redux';
import rootReducer from './global_state/reducers/rootReducer';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => AppWithStore);
