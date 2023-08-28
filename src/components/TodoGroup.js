import TodoItem from './TodoItem';

const TodoGroup = (props) => {
    return props.todos.map((todo, index) => {
        return <TodoItem key={index} item={todo} />
    });
}

export default TodoGroup;