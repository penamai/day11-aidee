import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import List from 'rc-virtual-list';

const TodoGroup = () => {
    const todos = useSelector((state) => state.todo.todoList)
    const data = todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo}/>
    })

    return (
        <List className="TodoGroup" data={data} height={500} itemHeight={15} itemKey="id">
            {item => <div>{item}</div>}
        </List>
    );
}

export default TodoGroup;