import { useRef } from 'react';
import { useTodos } from '../hooks/useTodos';

const TodoGenerator = () =>{
    const inputTodoRef = useRef();
    const { addTodo } = useTodos();

    const handleSubmitClick = () => {
        const text = inputTodoRef.current.value;
        inputTodoRef.current.value = null;
        if(text.trim() === '') return;
        addTodo(text);    
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