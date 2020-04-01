import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(preloadedState){
    const middleware = [thunkMiddleware];
    // const middlwareEnhancer = applyMiddleware(...middleware);

    // const enhancers = [middlwareEnhancer];
    // const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
    return store;
}

// export default createStore(reducer, composeWithDevTools());