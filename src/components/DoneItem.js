import { useNavigate } from 'react-router-dom';
import { useTodos } from '../hooks/useTodos';
import { CloseOutlined } from '@ant-design/icons';

const DoneItem = (props) =>{
    const style = props.todo.done ? {textDecoration: "line-through"}: {};
    const navigate = useNavigate();
    const { deleteTodo } = useTodos();

    const handleItemClick = () => {
        navigate('/done/' + props.todo.id);
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
        <div  className="doneItem" onClick={handleItemClick}>
            <span style={style}>{props.todo.text}</span> 
            <div onClick={handleDeleteClick}><CloseOutlined /></div>
        </div>
    );
}

export default DoneItem;