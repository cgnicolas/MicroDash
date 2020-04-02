import React from 'react';
import './App.css';
import Application from './containers/Application'
import './index.css'
import { Provider } from 'react-redux';
import configureStore from './ducks/store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Application/>
    </Provider>
  );
}

export default App;
