import TodoItem from './TodoItem';

const TodoGroup = (props) =>{
    return props.items.map((item, index) =>{
       return <TodoItem key={index} item={item.item} />
    });
}

export default TodoGroup;