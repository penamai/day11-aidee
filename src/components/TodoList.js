import TodoGroup from './TodoGroup';
import TodoGenerator from './TodoGenerator';
import '../css/TodoList.css';

const TodoList = (props) =>{
    return (
        <div className="TodoList">
            <h1>Todo List</h1>
            <TodoGroup isDone={props.isDone}/>
            {!props.isDone && <TodoGenerator/>}
        </div>
    );
}

export default TodoList;