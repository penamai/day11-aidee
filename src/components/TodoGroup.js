import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoGroup = () => {
    const todos = useSelector((state) => state.todo.todoList)

    return (
        <div className="TodoGroup">
            {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo}/>
            })}
        </div>
    );
}

export default TodoGroup;