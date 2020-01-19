import {
    LOAD_FACT_START,
    LOAD_FACT_SUCCESS,
    LOAD_FACT_FAILURE,
} from '../actions';

const initialState = {
    fact: null,
    isLoading: false,
    error: ''
}

const reduxReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_FACT_START:
        return {
            ...state,
            isLoading: true
        }
        case LOAD_FACT_SUCCESS:
        return {
            ...state,
            fact: action.payload,
            isLoading: false,
            error: ''
        }
        case LOAD_FACT_FAILURE:
        return {
            ...state,
            isLoading: false,
            error: action.payload
        }
        default:
        return state;
    }
};

export default reduxReducer;
