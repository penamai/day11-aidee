import './css/App.css';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useTodos } from './hooks/useTodos';

function App() {
    const { loadTodos } = useTodos();
    useEffect(() => loadTodos, [])

    return (
      <div className="App">
        <Navigation />
        <Outlet></Outlet>
      </div>
    );
}

export default App;
