import TodoGroup from './TodoGroup';
import TodoGenerator from './TodoGenerator';
import { useState } from 'react';
import '../css/TodoList.css';

const TodoList = () =>{
    const [todos, setTodos] = useState([]);

    const onTodosChange = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <div className="TodoList">
            <h1>Todo List</h1>
            <TodoGroup todos={todos} />
            <TodoGenerator onTodosChange={onTodosChange} />
        </div>
    );
}

export default TodoList;