import { useTodos } from '../hooks/useTodos';
import '../css/TodoItem.css'

const TodoItem = (props) =>{
    const style = props.todo.done ? {textDecoration: "line-through"}: {};
    const className = props.todo.done ? "TodoItemDone": "TodoItem";
    const { updateTodoStatus, updateTodoText, deleteTodo } = useTodos();

    const handleToggleClick = async () =>{
        updateTodoStatus(props.todo.id, !props.todo.done)
    }
    const handleUpdateClick = (event) => {
        const updatedText = window.prompt(
            "Enter updated text:",
            props.todo.text
        )
        if( updatedText != null && updatedText.trim() !== ''){
            updateTodoText(props.todo.id, updatedText);
        }
        event.stopPropagation();
    }
    const handleDeleteClick = (event) => {
        const confirmBox = window.confirm(
            "Do you really want to delete this Todo Item?"
        )
        if (confirmBox){
           deleteTodo(props.todo.id);     
        }
        event.stopPropagation();
    }
    
    return(
        <div className={className} onClick={handleToggleClick}>
            <span style={style}>{props.todo.text}</span> 
            <div onClick={handleUpdateClick}>⚙</div>
            <div onClick={handleDeleteClick}>✖</div>
        </div>
    );
}

export default TodoItem;