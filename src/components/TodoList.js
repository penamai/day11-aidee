import TodoGroup from './TodoGroup';

const TodoList = () =>{
    const items = [
        {item: "This is the first item"},
        {item: "This is the second item"},
        {item: "This is the third item"}
    ];

    return (
        <div>
            <TodoGroup items={items}/>
        </div>
    );
}

export default TodoList;