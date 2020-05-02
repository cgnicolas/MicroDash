import axios from 'axios';
import API from '../../../utils/API';
export const FETCH_ARDUINOS_PENDING = 'FETCH_ARDUINOS_PENDING';
export const FETCH_ARDUINOS_SUCCESS = 'FETCH_ARDUINOS_SUCCESS';
export const FETCH_ARDUINOS_ERROR = 'FETCH_ARDUINOS_ERROR';
export const UPDATE_CURRENT_ARDUINO_TYPE = 'UPDATE_CURRENT_ARDUINO_TYPE';
export const POWER_ARDUINO_PENDING = 'POWER_ARDUINO_PENDING';
export const POWER_ARDUINO_SUCCESS = 'POWER_ARDUINO_SUCCESS';
export const POWER_ARDUINO_ERROR = 'POWER_ARDUINO_ERROR';
export const SET_ARDUINO_COLOR_PENDING = 'SET_ARDUINO_COLOR_PENDING';
export const SET_ARDUINO_COLOR_SUCCESS = 'SET_ARDUINO_COLOR_SUCCESS';
export const SET_ARDUINO_COLOR_ERROR = 'SET_ARDUINO_COLOR_ERROR';
export const INVOKE_UNIQUE_PENDING = 'INVOKE_UNIQUE_PENDING';
export const INVOKE_UNIQUE_SUCCESS = 'INVOKE_UNIQUE_SUCCESS';
export const INVOKE_UNIQUE_ERROR = 'INVOKE_UNIQUE_ERROR';

function fetchArduinosPending(){
    return {
        type: FETCH_ARDUINOS_PENDING,
    }
}

function fetchArduinosSuccess(arduinoStates){
    return {
        type: FETCH_ARDUINOS_SUCCESS,
        arduinoStates
    }
}

function fetchArduinosError(error){
    return {
        type: FETCH_ARDUINOS_ERROR,
        error
    }
}

function powerArduinoPending(){
    return {
        type: POWER_ARDUINO_PENDING
    }
}

function powerArduinoSuccess(arduinoStates){
    return {
        type: POWER_ARDUINO_SUCCESS,
        arduinoStates
    }
}

function powerArduinoError(error){
    return {
        type: POWER_ARDUINO_ERROR,
        error
    }
}

function setArduinoColorPending(){
    return {
        type: SET_ARDUINO_COLOR_PENDING,
    }
}

function setArduinoColorError(error){
    return {
        type: SET_ARDUINO_COLOR_ERROR,
        error
    }
}

function setArduinoColorSuccess(arduinoStates){
    return {
        type: SET_ARDUINO_COLOR_SUCCESS,
        arduinoStates
    }
}

function invokeUniquePending(){
    return {
        type: INVOKE_UNIQUE_PENDING
    }
}

function invokeUniqueSuccess(arduinoStates){
    return {
        type: INVOKE_UNIQUE_SUCCESS,
        arduinoStates
    }
}

function invokeUniqueError(error){
    return {
        type: INVOKE_UNIQUE_ERROR,
        error
    }
}

export function updateCurrentType(type){
    return {
        type: UPDATE_CURRENT_ARDUINO_TYPE,
        currentType: type
    }
}

export function fetchArduinos(){
    return function(dispatch){
        dispatch(fetchArduinosPending());
        const opts = {
            serviceDetails:{
                service: {
                    name: "Arduino",
                    process: "getarduinos"
                }
                
            }
        }
        axios.post(API.invokeService, opts)
        .then((result) => {
            dispatch(fetchArduinosSuccess(result.data));
            if(result.data[0]){
                dispatch(updateCurrentType(result.data[0].type));
            }
            return result.data;
        })
        .catch((err) => {
            dispatch(fetchArduinosError(err));
            return err;
        })
    }
}

export function powerArduino(name){
    return function(dispatch){
        dispatch(powerArduinoPending());
        const opts = {
            serviceDetails:{
                service: {
                    name: "Arduino",
                    process: "power"
                }
            },
            data: {
                name
            }
        }
        axios.post(API.invokeService, opts)
        .then((result) => {
            dispatch(powerArduinoSuccess(result.data));
            return result.data;
        })
        .catch((err) => {
            dispatch(powerArduinoError(err));
            return err;
        })
    }
}

export function setArduinoColor(name, rgb){
    return function(dispatch){
        dispatch(setArduinoColorPending());
        console.log(name);
        const opts = {
            serviceDetails: {
                service: {
                    name: 'Arduino',
                    process: 'setcolor'
                }
            },
            data: {
                name,
                payload: {
                    rgb
                }
            }
        }
        axios.post(API.invokeService, opts)
        .then((result) => {
            dispatch(setArduinoColorSuccess(result.data))
            return result.data;
        })
        .catch((err) => {
            dispatch(setArduinoColorError(err));
            return err;
        })
    }
}

export function invokeUnique(name, functionName){
    return function(dispatch){
        dispatch(invokeUniquePending());
        const opts = {
            serviceDetails: {
                service: {
                    name: 'Arduino',
                    process: 'invoke'
                }
            },
            data: {
                name,
                payload: {
                    name: functionName
                }
            }
        }
        axios.post(API.invokeService, opts)
        .then((result) => {
            dispatch(invokeUniqueSuccess(result.data))
            return result.data;
        })
        .catch((err) => {
            dispatch(invokeUniqueError(err));
            return err;
        })
    }
}