import {FETCH_SERVICES_ERROR, FETCH_SERVICES_PENDING, FETCH_SERVICES_SUCCESS} from './actions';
import {select } from 'redux';
const initialState = {
    pending: false,
    services: [],
    error: null,
    successMSG: 'Redux Working'
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SERVICES_SUCCESS:
            return {
                ...state,
                services: action.services,
                pending: false,
            }
        case FETCH_SERVICES_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_SERVICES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
    }
    return state;
}

export const selectReduxStatusMessage = state => state.services.successMSG;


export default reducer;