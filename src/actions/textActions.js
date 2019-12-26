import axios from 'axios';

export const LOAD_FACT_START = "LOAD_FACT_START"

//async action creator
export const getFact = () => dispatch => {
        dispatch({ type: LOAD_FACT_START });
        axios
            .get('https://catfact.ninja/facts?limit=1&max_length=140')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log('Data returned an error', err)
            })
}
