import { FETCH_ROOMS_ERROR, FETCH_ROOMS_PENDING, FETCH_ROOMS_SUCCESS, UPDATE_CURRENT_ROOM, FETCH_LIGHTS_SUCCESS, FETCH_LIGHTS_PENDING, FETCH_LIGHTS_ERROR } from './actions';

const initialState = {
    rooms: [],
    lights: [],
    error: false,
    currentRoom: {
        id: 1
    },
}

function reducer(state = initialState, action){
    switch(action.type) {
        case FETCH_ROOMS_PENDING: 
            return {
                ...state,
                pending: true,
            }
        case FETCH_ROOMS_SUCCESS:
            return {
                ...state,
                rooms: action.rooms,
                pending: false,
            }
        case FETCH_ROOMS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case FETCH_LIGHTS_SUCCESS: 
            return { 
                ...state,
                pending: false,
                lights: action.lights
            }
        case FETCH_LIGHTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_LIGHTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case UPDATE_CURRENT_ROOM:
            return {
                ...state,
                currentRoom: action.currentRoom
            }
        default:
            return state;
    }
}
export const selectRooms = state => state.lights.rooms;
export const selectCurrentRoom = state => state.lights.currentRoom;
export default reducer;