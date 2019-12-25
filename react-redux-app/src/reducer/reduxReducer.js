import { LOAD_TEXT_START } from '../actions';

const initialState = {
    text: null,
    isLoading: false,
    error: ''
}

const reduxReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_TEXT_START:
        return {
            ...state,
            isLoading: true
        }
        default:
        return state;
    }
};

export default reduxReducer;
