import API from '../../../utils/API';
import axios from 'axios';

export const FETCH_ROOMS_PENDING = 'FETCH_ROOMS_PENDING';
export const FETCH_ROOMS_SUCCESS = 'FETCH_ROOMS_SUCCESS';
export const FETCH_ROOMS_ERROR = 'FETCH_ROOMS_ERROR';
export const UPDATE_CURRENT_ROOM = 'UPDATE_CURRENT_ROOM';
export const FETCH_LIGHTS_PENDING = 'FETCH_LIGHTS_PENDING';
export const FETCH_LIGHTS_SUCCESS = 'FETCH_LIGHTS_SUCCESS';
export const FETCH_LIGHTS_ERROR = 'FETCH_LIGHTS_ERROR';

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
            console.log(response.data);
            dispatch(fetchLightsSuccess(response.data))
            return response.data
        })
        .catch((err) => {
            dispatch(fetchLightsError(err));
        })
    }
}

function fetchLightsPending(){
    return {
        type: FETCH_LIGHTS_PENDING,
    }
}

function fetchLightsSuccess(lights){
    console.log("Lights", lights)
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