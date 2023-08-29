import { useRef } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from "./todoListSlice";

const TodoGenerator = (props) =>{
    const inputTodoRef = useRef();
    const dispatch = useDispatch();

    const onSubmitClick = () => {
        const newTodo = inputTodoRef.current.value;
        if(newTodo === '') return;
        dispatch(addTodo(newTodo));
        inputTodoRef.current.value = null;
    }

    return(
        <div className="TodoGenerator">
            <input ref={inputTodoRef} placeholder={"Enter a todo item..."} type="text" />
            <button onClick={onSubmitClick}>add</button>
        </div>
    );
}

export default TodoGenerator;