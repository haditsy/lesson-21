// import axios from "axios"
// import { BASE_URL } from "../../constants/general"


// export const TODOS_ACTIONS_TYPE = {
//     GET_TODOS_SUCCESS: 'GET_TODOS_SUCCESS'
// }

// const getTodosSuccessAction = ( todos ) => {
//     return { type: TODOS_ACTIONS_TYPE.GET_TODOS_SUCCESS, payload: todos}
// }

// export const getTodosThunk = () => {
//     return async (dispatch, getState) => {
//         try {
//             const response = await axios.get(`${BASE_URL}/todos.json`)
//             dispatch(getTodosSuccessAction(response.date))
//         } catch (error) {
//             console.log(error, "Something went wrong on fetching todos");
//         }
//     }
// }

import axios from "axios";
import { BASE_URL } from "../../constants/general";

export const TODOS_ACTIONS_TYPE = {
    GET_TODOS_SUCCESS: 'GET_TODOS_SUCCESS'
};

const getTodosSuccessAction = (todos) => {
    return { type: TODOS_ACTIONS_TYPE.GET_TODOS_SUCCESS, payload: todos };
};

export const getTodosThunk = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get(`${BASE_URL}/todos.json`);
            dispatch(getTodosSuccessAction(response.data));
        } catch (error) {
            console.log(error);
        }
    };
};


export const deleteTodoThunk = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.delete(`${BASE_URL}/todos/${id}.json`);
            dispatch(getTodosThunk(response.data))
        } catch (error) {
            console.log(error);
        }
    };
}
