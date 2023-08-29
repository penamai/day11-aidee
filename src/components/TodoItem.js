import { useDispatch } from "react-redux";
import { toggleDone, deleteTodo} from "./todoListSlice";

const TodoItem = (props) =>{
    const style = props.done ? {textDecoration: "line-through"}: {};
    const dispatch = useDispatch();
    const handleToggleClick = () =>{
        dispatch(toggleDone(props.id))

    }

    const handleDelete = () => {
        dispatch(deleteTodo(props.id))
    }
    return(
        <div  className="TodoItem" >
        <div onClick={handleToggleClick}>
            <span style={style}>{props.item}</span> 
        </div>
        <div onClick={handleDelete}>
        ✖
        </div>
        </div>
    );
}

export default TodoItem;