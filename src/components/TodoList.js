import TodoGroup from './TodoGroup';
import TodoGenerator from './TodoGenerator';
import { Typography } from 'antd';

const titleStyle = {
    margin: 0, 
    fontVariant: 'small-caps', 
    color: '#DDC397'
}

const TodoList = () =>{
    return (
        <>
            <Typography.Title level={1} 
                              style={titleStyle}>
                Todo List
            </Typography.Title>
            <TodoGroup />
            <TodoGenerator/>
        </>
    );
}

export default TodoList;