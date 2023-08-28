import './App.css';
import TodoGroup from './components/TodoGroup';

function App() {
    const items = [
        {item: "This is the first item"},
        {item: "This is the second item"},
        {item: "This is the third item"}
    ];

    return (
      <div className="App">
        <TodoGroup items={items}/>
      </div>
    );
}

export default App;
