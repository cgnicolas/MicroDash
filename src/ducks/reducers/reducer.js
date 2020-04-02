import { combineReducers } from 'redux';
import services from './services/reducer';

const initialState = {
    currentPage: 'home'
}

function root(state = initialState, action){
    switch(action.type){
        default: 
            return state;
    }
}

export default combineReducers({
    root,
    services
})