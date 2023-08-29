import TodoGroup from './TodoGroup';
import TodoGenerator from './TodoGenerator';
import '../css/TodoList.css';
import { useSelector } from 'react-redux';

const TodoList = () =>{
    const todos = useSelector((state) => state.todo.todoList)

    return (
        <div className="TodoList">
            <h1>Todo List</h1>
            <TodoGroup todos={todos} />
            <TodoGenerator />
        </div>
    );
}

export default TodoList;