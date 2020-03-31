import React from 'react';
import './App.css';
import Application from './containers/Application'
import './styles/application.css'
import { Provider } from 'react-redux';
import store from './ducks/store';

function App() {
  return (
    <Provider store={store}>
        <Application/>
    </Provider>
  );
}

export default App;
