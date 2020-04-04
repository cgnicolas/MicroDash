import API from '../../../utils/API';
import axios from 'axios';

export const FETCH_ROOMS_PENDING = 'FETCH_ROOMS_PENDING';
export const FETCH_ROOMS_SUCCESS = 'FETCH_ROOMS_SUCCESS';
export const FETCH_ROOMS_ERROR = 'FETCH_ROOMS_ERROR';
export const UPDATE_CURRENT_ROOM = 'UPDATE_CURRENT_ROOM';

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
            console.log(result);
            dispatch(fetchRoomsSuccess(result.data));
            return result.body;
        })
        .catch((err) => {
            dispatch(fetchRoomsError(err));
        })
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