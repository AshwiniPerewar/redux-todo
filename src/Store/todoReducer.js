import { ADD_TODO, COMPLETE_TODO,GET_TODO_ERROR, GET_TODO_REQUEST,GET_SINGLE_TODO_REQUEST,GET_SINGLE_TODO_SUCCESS,GET_SINGLE_TODO_ERROR, GET_TODO_SUCCESS, REMOVE_TODO, UPDATE_TODO } from "./action.types";
export const todoReducer=(state={todos:[]},{type, payload})=>
{
    switch (type) {

        case GET_TODO_REQUEST:{
            return {...state,}
        }

        case GET_TODO_SUCCESS:{
            return {...state,todos:payload}
        }
        case GET_TODO_ERROR:{
            return {...state,todos:payload}
        }

        case GET_SINGLE_TODO_REQUEST:{
            return {...state,}
        }

        case GET_SINGLE_TODO_SUCCESS:{
            return {...state,todos:payload}
        }
        case GET_SINGLE_TODO_ERROR:{
            return {...state,todos:payload}
        }
        
        case ADD_TODO:{
                return {
                    ...state,
                todos:[
                    ...state.todos,
                   {
                    ...payload,
                   },
                ],
            };
            }
        case UPDATE_TODO:{
                return {...state};
            }
        case REMOVE_TODO:{
                return {...state};
            }
        case COMPLETE_TODO:{
                return {...state};
            }
    
        default:
            return state;
    }
}