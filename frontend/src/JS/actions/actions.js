import axios from 'axios';
import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL

} from '../constants/actions-types'

export const getUsers = () => async dispatch => {
    dispatch({
        type: GET_USERS,
    });
    try {
        await axios.get('http://127.0.0.1:3500/user')
            .then(response => {
                const users = response.data
                dispatch({
                    type: GET_USERS_SUCCESS,
                    payload: users
                });
            })

    } catch (error) {
        dispatch({
            type: GET_USERS_FAIL,
            payload: error.response.data
        })
    }

}