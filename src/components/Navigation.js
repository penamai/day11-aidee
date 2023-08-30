import { NavLink } from 'react-router-dom'
import React, { useState } from 'react';
import { Menu } from 'antd';
import { HomeFilled, CheckSquareFilled, QuestionCircleFilled } from '@ant-design/icons'
import '../css/Navigation.css';

const menuItems = [
    {   
        label:<NavLink className="navLink" to={"/"}>Home</NavLink>,
        key: 'home',
        icon: <HomeFilled style={{color: "#DDC397"}}/>
    },
    {
        label: <NavLink className="navLink" to={"/done"}>Done List</NavLink>,
        key: 'done',
        icon: <CheckSquareFilled style={{color: "#DDC397"}}/>
    },
    {
        label: <NavLink className="navLink" to={"/help"}>Help</NavLink>,
        key: 'help',
        icon: <QuestionCircleFilled style={{color: "#DDC397"}}/>
    }
]

const menuStyle = {
    textAlign: 'center',
    fontVariant: 'small-caps',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#352E2F',
    backgroundColor: '#994841',
    font: '50px',
};

const Navigation = () =>{
    const [current, setCurrent] = useState('home');
    
    const handleClick = (event) => {
        setCurrent(event.key);
    }

    return (
        <Menu 
            onClick={handleClick} 
            selectedKeys={[current]} 
            mode="horizontal" 
            items={menuItems}
            style={menuStyle} />
    );
}

export default Navigation;