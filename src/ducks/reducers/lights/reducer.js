import { 
    FETCH_ROOMS_ERROR, 
    FETCH_ROOMS_PENDING, 
    FETCH_ROOMS_SUCCESS, 
    UPDATE_CURRENT_ROOM, 
    FETCH_LIGHTS_SUCCESS,
    FETCH_LIGHTS_PENDING, 
    FETCH_LIGHTS_ERROR,
    POWER_LIGHT_SUCCESS,
    POWER_LIGHT_PENDING,
    POWER_LIGHT_ERROR,
    SET_LIGHT_COLOR_PENDING,
    SET_LIGHT_COLOR_SUCCESS,
    SET_LIGHT_COLOR_ERROR,
} from './actions';

const initialState = {
    rooms: [],
    lights: [],
    error: false,
    currentRoom: {},
}

function reducer(state = initialState, action){
    switch(action.type) {
        case FETCH_ROOMS_PENDING: 
            return {
                ...state,
                roomsPending: true,
            }
        case FETCH_ROOMS_SUCCESS:
            return {
                ...state,
                rooms: action.rooms,
                roomsPending: false,
            }
        case FETCH_ROOMS_ERROR:
            return {
                ...state,
                roomsPending: false,
                error: action.error,
            }
        case FETCH_LIGHTS_SUCCESS: 
            return { 
                ...state,
                lightsPending: false,
                lights: action.lights
            }
        case FETCH_LIGHTS_PENDING:
            return {
                ...state,
                lightsPending: true
            }
        case FETCH_LIGHTS_ERROR:
            return {
                ...state,
                lightsPending: false,
                error: action.error
            }
        case POWER_LIGHT_ERROR:
            return {
                ...state,
                powerLightPending: false,
                error: action.error
            }
        case POWER_LIGHT_PENDING: 
            return {
                ...state,
                powerLightPending: true,
            }
        case POWER_LIGHT_SUCCESS:
            return {
                ...state,
                powerLightPending: false,
                lights: action.lights
            }
        case UPDATE_CURRENT_ROOM:
            return {
                ...state,
                currentRoom: action.currentRoom
            }
        case SET_LIGHT_COLOR_PENDING: 
            return {
                ...state,
                setColorPending: true
            }
        case SET_LIGHT_COLOR_SUCCESS: 
            return {
                ...state,
                setColorPending: false,
                lights: action.lights
            }
        case SET_LIGHT_COLOR_ERROR:
            return {
                ...state,
                setColorPending: false,
                error: action.error
            }
        default:
            return state;
    }
}
export default reducer;