import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoGroup = (props) => {
    const todos = useSelector((state) => state.todo.todoList)

    return (
        <div className="TodoGroup">
            {(props.isDone ? todos.filter(task => task.done) : todos).map((todo) => {
                return <TodoItem key={todo.id} todo={todo} isDone={props.isDone}/>
            })}
        </div>
    );
}

export default TodoGroup;