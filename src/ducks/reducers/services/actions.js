import fetch from 'cross-fetch'
import API from '../../../utils/API'
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_PENDING = 'FETCH_SERVICES_PENDING';
export const FETCH_SERVICES_ERROR = 'FETCH_SERVICES_ERROR';

function fetchServicesPending(){
    return {
        type: FETCH_SERVICES_PENDING,
    }
}

function fetchServicesSuccess(services){
    return {
        type: FETCH_SERVICES_SUCCESS,
        services: services,
    }
}

function fetchServicesError(error){
    return { 
        type: FETCH_SERVICES_ERROR,
        error
    }
}

export function fetchServices(){
    return function(dispatch) {
        dispatch(fetchServicesPending())
        fetch(API.getServices)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            if(res.error){
                throw(res.error);
            }
            dispatch(fetchServicesSuccess(res.body));
            return res.body;
        })
        .catch((err) => {
            dispatch(fetchServicesError(err));
        })
    }
}
