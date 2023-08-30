import { useDispatch } from "react-redux";
import { toggleDone, deleteTodo} from "./todoListSlice";

const TodoItem = (props) =>{
    const style = props.todo.done ? {textDecoration: "line-through"}: {};
    const className = props.todo.done ? "TodoItemDone": "TodoItem";
    const dispatch = useDispatch();

    const handleToggleClick = () =>{
        if(props.isDone) return;
        dispatch(toggleDone(props.todo.id));
    }
    const handleDeleteClick = (event) => {
        const confirmBox = window.confirm(
            "Do you really want to delete this Todo Item?"
        )
        if (confirmBox){
            dispatch(deleteTodo(props.todo.id));            
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