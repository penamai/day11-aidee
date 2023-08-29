import { useDispatch } from "react-redux";
import { toggleDone } from "./todoListSlice";

const TodoItem = (props) =>{
    const done = props.done ? "✔" : "✖";
    const dispatch = useDispatch();

    const handleClick = () =>{
        dispatch(toggleDone(props.id))
    }

    return(
        <div className="TodoItem" onClick={handleClick}>{props.item} {done}</div>
    );
}

export default TodoItem;