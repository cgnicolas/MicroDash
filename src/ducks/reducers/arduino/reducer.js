import { 
    FETCH_ARDUINOS_SUCCESS,
    FETCH_ARDUINOS_ERROR,
    FETCH_ARDUINOS_PENDING,
    UPDATE_CURRENT_ARDUINO_TYPE,
    POWER_ARDUINO_PENDING,
    POWER_ARDUINO_SUCCESS,
    POWER_ARDUINO_ERROR,
    SET_ARDUINO_COLOR_SUCCESS,
    SET_ARDUINO_COLOR_ERROR,
    SET_ARDUINO_COLOR_PENDING,
    INVOKE_UNIQUE_ERROR,
    INVOKE_UNIQUE_PENDING,
    INVOKE_UNIQUE_SUCCESS
} from './actions';

const initialState = {
    arduinoStates: [],
    fetchArduinosPending: false,
    error: null,
    currentType: null
}
function reducer(state = initialState, action){
    switch(action.type){
        case FETCH_ARDUINOS_PENDING:
            return {
                ...state,
                fetchArduinosPending: true,
            }
        case FETCH_ARDUINOS_SUCCESS:
            return {
                ...state,
                fetchArduinosPending: false,
                arduinoStates: action.arduinoStates,
            }
        case FETCH_ARDUINOS_ERROR:
            return {
                ...state,
                fetchArduinosPending: false,
                error: action.error
            }
        case UPDATE_CURRENT_ARDUINO_TYPE: 
            return {
                ...state,
                currentType: action.currentType
            }
        case POWER_ARDUINO_PENDING: 
            return {
                ...state,
                powerArduinoPending: true,
            }
        case POWER_ARDUINO_SUCCESS: 
            return {
                ...state,
                powerArduinoPending: false,
                arduinoStates: action.arduinoStates,
            }
        case POWER_ARDUINO_ERROR:
            return {
                ...state,
                powerArduinoPending: false,
                error: action.error
            }
        case SET_ARDUINO_COLOR_PENDING: 
            return {
                ...state,
                setArduinoColorPending: true,
            }
        case SET_ARDUINO_COLOR_SUCCESS:
            return {
                ...state,
                setArduinoColorPending: false,
                arduinoStates: action.arduinoStates,
            }
        case SET_ARDUINO_COLOR_ERROR:
            return {
                ...state,
                setArduinoColorPending: false,
                error: action.error
            }
        case INVOKE_UNIQUE_PENDING:
            return {
                ...state,
                invokeUniquePending: true,
            }
        case INVOKE_UNIQUE_SUCCESS:
            return {
                ...state,
                invokeUniquePending: false,
                arduinoStates: action.arduinoStates
            }
        case INVOKE_UNIQUE_ERROR:
            return {
                ...state,
                invokeUniquePending: false,
                error: action.error
            }
    }
    return state;
}

export default reducer;