import TodoGroup from './TodoGroup';
import TodoGenerator from './TodoGenerator';
import { useState } from 'react';

const TodoList = () =>{
    const [todos, setTodos] = useState([]);

    const onTodosChange = (newTodo) => {
        console.log(newTodo);
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <TodoGroup todos={todos} />
            <TodoGenerator onTodosChange={onTodosChange} />
        </div>
    );
}

export default TodoList;