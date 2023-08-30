import * as todoApi from '../api/todoApi';
import { useDispatch } from 'react-redux';
import { resetTodo } from '../components/todoListSlice';

export const useTodos = () => {
    const dispatch = useDispatch();

    async function loadTodos(){
        const response = await todoApi.getTodoTasks();
        dispatch(resetTodo(response.data));
    }

    async function addTodo(text) {
        await todoApi.createTodoTask({text: text});
        loadTodos();
    }

    async function updateTodo(id, done){
        await todoApi.updateTodoTask(id, {done: done});
        loadTodos();
    }

    async function deleteTodo(id){
        await todoApi.deleteTodoTask(id);
        loadTodos();
    }

    return{
        loadTodos,
        addTodo,
        updateTodo,
        deleteTodo
    }
}