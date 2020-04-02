import {FETCH_SERVICES_ERROR, FETCH_SERVICES_PENDING, FETCH_SERVICES_SUCCESS} from './actions';
const initialState = {
    pending: true,
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
        default:
            return state;
    }
}

export const selectReduxStatusMessage = state => state.services.successMSG;
export const selectServices = state => state.services.services;
export const selectPending = state => state.services.pending;


export default reducer;