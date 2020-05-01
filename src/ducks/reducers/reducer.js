import { combineReducers } from 'redux';
import services from './services/reducer';
import root from './application/reducer'
import lights from './lights/reducer';
import arduino from './arduino/reducer';


export default combineReducers({
    root,
    services,
    lights,
    arduino
})