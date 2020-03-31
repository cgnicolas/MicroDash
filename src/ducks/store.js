import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(reducer, composeWithDevTools());