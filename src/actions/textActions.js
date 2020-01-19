import axios from 'axios';

//Make a variable with the action type string
export const LOAD_FACT_START = "LOAD_FACT_START"
export const LOAD_FACT_SUCCESS = "LOAD_FACT_SUCCESS"
export const LOAD_FACT_FAILURE = "LOAD_FACT_FAILURE"

//async action creator
export const getFact = () => dispatch => {
        dispatch({ type: LOAD_FACT_START });
        axios
            .get('https://catfact.ninja/facts?limit=1&max_length=140')
            .then(res => {
                console.log(res.data.data);
                dispatch({ type: LOAD_FACT_SUCCESS, payload: res.data.data[0] })
            })
            .catch(err => {
                console.log('Data returned an error', err)
                dispatch({ type: LOAD_FACT_FAILURE, payload: err.response})
            })
}
