import { useDispatch } from "react-redux";
import { toggleDone, deleteTodo} from "./todoListSlice";

const TodoItem = (props) =>{
    const style = props.done ? {textDecoration: "line-through"}: {};
    const className = props.done ? "TodoItemDone": "TodoItem";
    const dispatch = useDispatch();
    const handleToggleClick = () =>{
        dispatch(toggleDone(props.id));

    }
    const handleDelete = (event) => {
        const confirmBox = window.confirm(
            "Do you really want to delete this Todo Item?"
        )
        if (confirmBox){
            dispatch(deleteTodo(props.id));            
        }
        event.stopPropagation();
    }
    
    return(
        <div  className={className} onClick={handleToggleClick}>
            <span style={style}>{props.item}</span> 
            <div onClick={handleDelete}>✖</div>
        </div>
    );
}

export default TodoItem;