import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { v4 as uuidv4} from "uuid";
import { AddTodo, GetTodo } from '../Store/action';

const Todo = () => {
  const ref=useRef();
  const dispatch=useDispatch();
  const todos=useSelector((state)=>state.todo.todos)

const addNew=()=>
{
  let value=ref.current.value;
const newdata={id:uuidv4(),value:value,
completed:false}
  console.log(value);
  dispatch(AddTodo(newdata));
};


useEffect(()=>
{
  GetTodo(dispatch)
},[])

  return (
    <div>TodoApp
      <input ref={ref} type="text" placeholder='Type Here...'></input>
      <button onClick={addNew}>ADD</button>
      {todos.map((todo)=>(
      <h1 key={todo.id}> <Link to={`/todoapp/${todo.id}`}>{todo.value}</Link></h1>
      ))}
    </div>
  )
}

export default Todo