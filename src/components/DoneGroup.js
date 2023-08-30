import DoneItem from './DoneItem.js';
import { useSelector } from 'react-redux';

const DoneGroup = () => {
    const todos = useSelector((state) => state.todo.todoList)

    return (
        <div className="doneGroup">
            {todos.filter(task => task.done).map((todo) => {
                return <DoneItem key={todo.id} todo={todo} />
            })}
        </div>
    );
}

export default DoneGroup;