import { UPDATE_CURRENT_PAGE } from './actions'
const initialState = {
    currentPage: 'Home'
}

export default function root(state = initialState, action){
    switch(action.type){
        case UPDATE_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: action.currentPage
            }
        default: 
            return state;
    }
}

export const selectCurrentPage = state => state.root.currentPage;