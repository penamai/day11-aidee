import '../css/Navigation.css'
import { NavLink } from 'react-router-dom'

const Navigation = () =>{
    return (
        <div className="navigation">
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/done"}>Done List</NavLink></li>
                    <li><NavLink to={"/help"}>Help</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;