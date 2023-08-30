import '../css/TodoItemDetails.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const TodoItemDetail = () => {
    const { id } = useParams();
    const todoItem = useSelector(state => state.todo.todoList.find(todo => todo.id === id));

    return(
        <div className="todoItemDetail">
            <h1>Todo Item Detail</h1>
            <div>Item ID: {todoItem?.id}</div>
            <div>Item Text: {todoItem?.text}</div>
        </div>
    );
}

export default TodoItemDetail;