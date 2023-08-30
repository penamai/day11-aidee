import DoneItem from './DoneItem.js';
import { useSelector } from 'react-redux';
import VirtualList from 'rc-virtual-list';
import { List } from 'antd';
import '../css/DoneGroup.css';

const DoneGroup = () => {
    const todos = useSelector((state) => state.todo.todoList)
    const data = todos.filter(task => task.done);

    return (
        <List>
            <VirtualList className="DoneGroup" data={data} height={500} itemHeight={15} itemKey="id">
                {item => <List.Item key={item.id}><DoneItem key={item.id} todo={item} /></List.Item>}
            </VirtualList>
        </List>
    );
}

export default DoneGroup;