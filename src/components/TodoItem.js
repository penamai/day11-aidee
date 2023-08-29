const TodoItem = (props) =>{
    const done = props.done ? "✔" : "✖";
    return(
        <div className="TodoItem">{props.item} {done}</div>
    );
}

export default TodoItem;