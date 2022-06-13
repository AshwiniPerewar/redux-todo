import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { GetSingleTodo } from '../Store/action';

const Todo = () => {
  const{id}=useParams();
  const todo=useSelector((state)=>state.todo.todos);
  console.log(id)
const dispatch=useDispatch();

  useEffect(()=>
  {
    dispatch(GetSingleTodo(id));
  },[id])
  return (
    <div>todo
     
        <div>{todo.value}</div>
     
    </div>
  )
}

export default Todo