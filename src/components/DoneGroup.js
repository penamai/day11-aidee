import DoneItem from './DoneItem.js';
import { useSelector } from 'react-redux';
import List from 'rc-virtual-list';
import '../css/DoneGroup.css';

const DoneGroup = () => {
    const todos = useSelector((state) => state.todo.todoList)
    const data = todos.filter(task => task.done).map((todo) => {
        return <DoneItem key={todo.id} todo={todo}/>
    })

    return (
        <List className="DoneGroup" data={data} height={500} itemHeight={15} itemKey="id">
            {item => <div>{item}</div>}
        </List>
    );
}

export default DoneGroup;