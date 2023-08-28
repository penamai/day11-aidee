import TodoItem from './TodoItem';
import { useState } from 'react';

const TodoGroup = (props) => {
    return props.todos.map((todo, index) => {
        return <TodoItem key={index} item={todo} />
    });
}

export default TodoGroup;