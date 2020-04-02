export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';

function updateCurrentPage(page) {
    return {
        type: UPDATE_CURRENT_PAGE,
        currentPage: page,
    }
}

export function updatePage(page){
    return function(dispatch){
        dispatch(updateCurrentPage(page))
    }
}