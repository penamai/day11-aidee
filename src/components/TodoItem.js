import { useTodos } from '../hooks/useTodos';

const TodoItem = (props) =>{
    const style = props.todo.done ? {textDecoration: "line-through"}: {};
    const className = props.todo.done ? "TodoItemDone": "TodoItem";
    const { updateTodo, deleteTodo } = useTodos();

    const handleToggleClick = async () =>{
        updateTodo(props.todo.id, !props.todo.done)
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
        <div  className={className} onClick={handleToggleClick}>
            <span style={style}>{props.todo.text}</span> 
            <div onClick={handleDeleteClick}>✖</div>
        </div>
    );
}

export default TodoItem;