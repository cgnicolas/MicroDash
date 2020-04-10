import API from '../../../utils/API';
import axios from 'axios';

export const FETCH_ROOMS_PENDING = 'FETCH_ROOMS_PENDING';
export const FETCH_ROOMS_SUCCESS = 'FETCH_ROOMS_SUCCESS';
export const FETCH_ROOMS_ERROR = 'FETCH_ROOMS_ERROR';
export const UPDATE_CURRENT_ROOM = 'UPDATE_CURRENT_ROOM';
export const FETCH_LIGHTS_PENDING = 'FETCH_LIGHTS_PENDING';
export const FETCH_LIGHTS_SUCCESS = 'FETCH_LIGHTS_SUCCESS';
export const FETCH_LIGHTS_ERROR = 'FETCH_LIGHTS_ERROR';
export const POWER_LIGHT_PENDING = 'POWER_LIGHT_PENDING';
export const POWER_LIGHT_SUCCESS = 'POWER_LIGHT_SUCCESS';
export const POWER_LIGHT_ERROR = 'POWER_LIGHT_ERROR';
export const SET_LIGHT_COLOR_PENDING = 'SET_LIGHT_COLOR_PENDING';
export const SET_LIGHT_COLOR_SUCCESS = "SET_LIGHT_COLOR_SUCCESS";
export const SET_LIGHT_COLOR_ERROR = "SET_LIGHT_COLOR_ERROR";
export const SET_LIGHT_BRIGHTNESS_PENDING = "SET_LIGHT_BRIGHTNESS_PENDING";
export const SET_LIGHT_BRIGHTNESS_SUCCESS = "SET_LIGHT_BRIGHTNESS_SUCCESS";
export const SET_LIGHT_BRIGHTNESS_ERROR = "SET_LIGHT_BRIGHTNESS_ERROR";

export function updateCurrentRoom(currentRoom){
    return {
        type: UPDATE_CURRENT_ROOM,
        currentRoom
    }
}


export function fetchRooms(){
    return function(dispatch){
        console.log("within function");
        const opts = {
            serviceDetails: {
                service: {
                    name: "Lights",
                    process: "getrooms"
                }
            }
        }
        console.log("dispatched");
        dispatch(fetchRoomsPending());
        axios.post(API.invokeService, opts)
        .then((result) => {
            // console.log("Body", result.body);
            if(result.data.length > 0){
                dispatch(updateCurrentRoom(result.data[0]))
            }
            dispatch(fetchRoomsSuccess(result.data));
        })
        .catch((err) => {
            dispatch(fetchRoomsError(err));
        })
    }
}

export function fetchLights(){
    return function(dispatch){
        dispatch(fetchLightsPending());
        const opts = {
            serviceDetails: {
                service: {
                    name: "Lights",
                    process: "getlights"
                }
            }
        }
        axios.post(API.invokeService, opts)
        .then((response) => {
            dispatch(fetchLightsSuccess(response.data))
            return response.data
        })
        .catch((err) => {
            dispatch(fetchLightsError(err));
        })
    }
}

export function powerLight(id){
    return function(dispatch){
        const opts = {
            serviceDetails: {
                service: {
                    name: 'Lights',
                    process: 'power',
                }
            },
            data: {
                payload: {
                    id
                }
            }
        }
        dispatch(powerLightPending());
        axios.post(API.invokeService, opts)
        .then((response) => {
            dispatch(powerLightSuccess(response.data));
            return response.data;
        })
        .catch((err) => {
            console.log(err);
            dispatch(powerLightError(err));
            return err;
        })
    }
}

export function setLightColor(hex, id){
    return function(dispatch){
        const opts = {
            serviceDetails: {
                service: {
                    name: 'Lights',
                    process: 'setcolor',
                }
            },
            data: {
                payload: {
                    state: {
                        color: hex
                    },
                    id
                }
            }
        }
        dispatch(setLightColorPending());
        axios.post(API.invokeService, opts)
        .then((response) => {
            dispatch(setLightColorSuccess(response.data));
            return response.data;
        })
        .catch((error) => {
            dispatch(setLightColorError(error));
            return error;
        })
    }
}

export function setLightBrightness(brightness, id){
    return function(dispatch){
        const opts = {
            serviceDetails: {
                service: {
                    name: "Lights",
                    process: "setbrightness"
                },
            },
            data: {
                payload: {
                    state: {
                        bri: brightness
                    },
                    id
                }
            }
        }
        dispatch(setLightBrightnessPending());
        axios.post(API.invokeService, opts)
        .then((result) => {
            dispatch(setLightBrightnessSuccess(result.data));
            return result.data;
        })
        .catch((err) => {
            dispatch(setLightBrightnessError(err));
            return err;
        })
    }
}

function setLightBrightnessPending(){
    return {
        type: SET_LIGHT_BRIGHTNESS_PENDING,
    }
}

function setLightBrightnessSuccess(lights){
    return {
        type: SET_LIGHT_BRIGHTNESS_SUCCESS,
        lights,
    }
}

function setLightBrightnessError(error){
    return {
        type: SET_LIGHT_BRIGHTNESS_ERROR,
        error
    }
}

function powerLightPending(){
    return {
        type: POWER_LIGHT_PENDING,
    }
}

function powerLightSuccess(lights){
    return {
        type: POWER_LIGHT_SUCCESS,
        lights
    }
}

function powerLightError(error){
    return {
        type: POWER_LIGHT_ERROR,
        error
    }
}

function fetchLightsPending(){
    return {
        type: FETCH_LIGHTS_PENDING,
    }
}

function fetchLightsSuccess(lights){
    return {
        type: FETCH_LIGHTS_SUCCESS,
        lights: lights
    }
}

function fetchLightsError(error){
    return {
        type: FETCH_LIGHTS_ERROR,
        error: error
    }
}

function fetchRoomsPending(){
    return {
        type: FETCH_ROOMS_PENDING,
    }
}

function fetchRoomsSuccess(rooms){
    return {
        type: FETCH_ROOMS_SUCCESS,
        rooms,
    }
}

function fetchRoomsError(error){
    return {
        type: FETCH_ROOMS_ERROR,
        error
    }
}

function setLightColorPending(){
    return {
        type: SET_LIGHT_COLOR_PENDING,
    }
}

function setLightColorSuccess(lights){
    return {
        type: SET_LIGHT_COLOR_SUCCESS,
        lights
    }
}

function setLightColorError(error){
    return {
        type: SET_LIGHT_COLOR_ERROR,
        error
    }
}