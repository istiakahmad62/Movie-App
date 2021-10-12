import axios from 'axios';
import { GET_USER_FAILED, GET_USER_SUCCESS, USER_REQUEST } from "../../types";

export const fetchMovie = (url) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_REQUEST
            })
            const res = await axios.get(url)
            console.log(res.data.results)
            dispatch({
                type: GET_USER_SUCCESS,
                payload: res.data.results
            })
        }
        catch (error) {
            dispatch({
                type: GET_USER_FAILED,
                payload: error.message
            })
        }
    }
}