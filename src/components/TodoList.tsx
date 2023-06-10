import React from 'react';
import { Todo } from './model';
import "./styles.css";
import Singletodo from '../components/Singletodo';

interface props {
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC <props>= ({ todos , setTodos})  => {
  return(
     <div className='todos'>
        {todos.map((todo) => (
            <Singletodo

            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            />
        ))}
     </div>
  );
    
  
};

export default TodoList;
  