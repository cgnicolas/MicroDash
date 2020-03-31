const initialState = {
    msg: 'Redux Working'
};

function reducer(state = initialState, action) {
    console.log("REducing")
    console.log(state);
    return state;
}

export default reducer;