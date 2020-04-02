import { combineReducers } from 'redux';
import services from './services/reducer';
import root from './application/reducer'


export default combineReducers({
    root,
    services
})