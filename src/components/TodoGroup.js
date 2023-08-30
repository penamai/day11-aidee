import TodoItem from './TodoItem';

const TodoGroup = (props) => {
    return (
        <div className="TodoGroup">
            {props.todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo}/>
            })}
        </div>
    );
}

export default TodoGroup;