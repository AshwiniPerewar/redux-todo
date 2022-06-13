import { ADD_TODO, COMPLETE_TODO, COUNTER_DECREMENT, COUNTER_INCREMENT, GET_TODO, GET_TODO_ERROR, GET_TODO_REQUEST, GET_TODO_SUCCESS, REMOVE_TODO, UPDATE_TODO } from "./action.types";

import axios from "axios";
export const CounterInc=()=>({type:COUNTER_INCREMENT});
export const CounterDec=()=>({type:COUNTER_DECREMENT});


export const GetTodo=(dispatch)=>{
  dispatch({type:GET_TODO_REQUEST})
    axios.get("http://localhost:3004/todo")
  .then((r)=>{dispatch({type:GET_TODO_SUCCESS,payload:r.data})})
  .catch(()=>{dispatch({type:GET_TODO_ERROR})})
};

export const GetSingleTodo=(payload)=>(dispatch)=>{
  dispatch({type:GET_TODO_REQUEST})
    axios.get(`http://localhost:3004/todo/${payload}`)
  .then((r)=>{dispatch({type:GET_TODO_SUCCESS,payload:r.data})})
  .catch(()=>{dispatch({type:GET_TODO_ERROR})})
};

export const AddTodo=(payload)=>(dispatch)=>{
    axios.post("http://localhost:3004/todo",payload)
    .then((r)=>dispatch({type:ADD_TODO,payload:r.data}))
}
  
export const RemoveTodo=(id)=>({type:REMOVE_TODO,payload:id});
export const UpdateTodo=(payload)=>({type:UPDATE_TODO,payload});
export const CompleteTodo=(id)=>({type:COMPLETE_TODO,payload:id});
