import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import VirtualList from 'rc-virtual-list';
import { List } from 'antd';

const TodoGroup = () => {
    const todos = useSelector((state) => state.todo.todoList)

    return (
        <List>
            <VirtualList className="TodoGroup" data={todos} height={500} itemHeight={15} itemKey="id">
                {item => <List.Item key={item.id}><TodoItem key={item.id} todo={item} /></List.Item>}
            </VirtualList>
        </List>
    );
}

export default TodoGroup;