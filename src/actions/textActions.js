import axios from 'axios';

export const LOAD_TEXT_START = "LOAD_TEXT_START"

//async action creator
export const getText = () => dispatch => {
        dispatch({ type: LOAD_TEXT_START });
        axios
            .get('https://catfact.ninja/facts?limit=1&max_length=140')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log('Data returned an error', err)
            })
}
