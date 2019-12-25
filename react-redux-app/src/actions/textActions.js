export const LOAD_TEXT_START = "LOAD_TEXT_START"

//async action creator
export const getText = () => dispatch => {
        dispatch({ type: LOAD_TEXT_START });
}
