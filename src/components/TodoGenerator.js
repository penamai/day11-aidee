import { useRef } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from "./todoListSlice";
import { v4 as uuidv4 } from 'uuid';

const TodoGenerator = (props) =>{
    const inputTodoRef = useRef();
    const dispatch = useDispatch();

    const handleSubmitClick = () => {
        const newTodo = inputTodoRef.current.value;
        if(newTodo === '') return;
        dispatch(addTodo({id: uuidv4(), text: newTodo, done: false}));
        inputTodoRef.current.value = null;
    }

    const handleKeyDown = (event) =>{
        if(event.key === 'Enter')
            handleSubmitClick();
    }

    return(
        <div className="TodoGenerator">
            <input ref={inputTodoRef} placeholder={"Enter a todo item..."} type="text" onKeyDown={handleKeyDown}/>
            <button onClick={handleSubmitClick}>add</button>
        </div>
    );
}

export default TodoGenerator;