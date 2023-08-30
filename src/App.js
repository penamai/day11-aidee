import './css/App.css';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
    return (
      <div className="App">
        <Navigation />
        <Outlet></Outlet>
      </div>
    );
}

export default App;
