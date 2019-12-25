const initialState = {
    text: null,
    isLoading: false,
    error: ''
}

const reduxReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
        return state;
    }
};

export default reduxReducer;
