import { useRef } from 'react';
import { useTodos } from '../hooks/useTodos';
import '../css/TodoGenerator.css';
import { Input, Button } from 'antd';

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
            <Input className="inputBox" ref={inputTodoRef} size="large" placeholder={"Enter a todo item..."} type="text" onKeyDown={handleKeyDown}/>
            <Button className="inputButton" type="primary" onClick={handleSubmitClick}>add</Button>
        </div>
    );
}

export default TodoGenerator;