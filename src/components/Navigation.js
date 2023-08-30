import '../css/Navigation.css'
import { NavLink } from 'react-router-dom'

const Navigation = () =>{
    return (
        <div className="navigation">
            <nav>
                <ul>
                    <li><NavLink className="navLink" to={"/"}>Home</NavLink></li>
                    <li><NavLink className="navLink" to={"/done"}>Done List</NavLink></li>
                    <li><NavLink className="navLink" to={"/help"}>Help</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;