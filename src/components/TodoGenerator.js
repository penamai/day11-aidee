import { useRef } from 'react';

const TodoGenerator = (props) =>{
    const inputTodoRef = useRef();

    const onSubmitClick = () => {
        const newTodo = inputTodoRef.current.value;
        if(newTodo === '') return;
        props.onTodosChange(newTodo);
        inputTodoRef.current.value = null;
    }

    return(
        <div className="TodoGenerator">
            <input ref={inputTodoRef} type="text" />
            <button onClick={onSubmitClick}>add</button>
        </div>
    );
}

export default TodoGenerator;