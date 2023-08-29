import { useDispatch } from "react-redux";
import { toggleDone } from "./todoListSlice";

const TodoItem = (props) =>{
    const style = props.done ? {textDecoration: "line-through"}: {};
    const dispatch = useDispatch();
    const handleClick = () =>{
        dispatch(toggleDone(props.id))

    }
    return(
        
        <div className="TodoItem" onClick={handleClick}><span style={style}>{props.item}</span></div>
    );
}

export default TodoItem;