import TodoItem from './TodoItem';

const TodoGroup = (props) => {
    return (
        <div className="TodoGroup">
            {props.todos.map((todo, index) => {
            return <TodoItem key={index} item={todo} />
            })}
        </div>
    );
}

export default TodoGroup;