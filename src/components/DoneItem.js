import { useDispatch } from "react-redux";
import { deleteTodo } from "./todoListSlice";

const DoneItem = (props) =>{
    const style = props.todo.done ? {textDecoration: "line-through"}: {};
    const dispatch = useDispatch();

    const handleDeleteClick = (event) => {
        const confirmBox = window.confirm(
            "Do you really want to delete this Todo Item?"
        )
        if (confirmBox){
            dispatch(deleteTodo(props.todo.id));            
        }
    }
    
    return(
        <div  className="doneItem">
            <span style={style}>{props.todo.text}</span> 
            <div onClick={handleDeleteClick}>✖</div>
        </div>
    );
}

export default DoneItem;