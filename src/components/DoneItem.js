import { useDispatch } from "react-redux";
import { deleteTodo } from "./todoListSlice";
import { useNavigate } from 'react-router-dom';

const DoneItem = (props) =>{
    const style = props.todo.done ? {textDecoration: "line-through"}: {};
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate('/done/' + props.todo.id);
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
        <div  className="doneItem" onClick={handleItemClick}>
            <span style={style}>{props.todo.text}</span> 
            <div onClick={handleDeleteClick}>✖</div>
        </div>
    );
}

export default DoneItem;