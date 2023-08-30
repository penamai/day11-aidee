import TodoGroup from './TodoGroup';
import TodoGenerator from './TodoGenerator';
import '../css/TodoList.css';

const TodoList = () =>{
    return (
        <div className="TodoList">
            <h1>Todo List</h1>
            <TodoGroup />
            <TodoGenerator/>
        </div>
    );
}

export default TodoList;