import { LOAD_FACT_START } from '../actions';

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
        default:
        return state;
    }
};

export default reduxReducer;
