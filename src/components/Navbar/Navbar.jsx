import React from "react";
import './Navbar.css';

import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import profile_icon from '../../assets/jack.png';
import search_icon from '../../assets/search.png';
import notification_icon from '../../assets/notification.png';
import { Link } from "react-router-dom";


export function Navbar({setSidebar}) {

    return (
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <img className='menu_icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon}  />
                <Link to='/'><img className='logo' src={logo} alt='not visible'/></Link>
            </div>


            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type='text' placeholder="Search" />
                    <img src={search_icon}></img>
                </div>
            </div>


            <div className='nav-right flex-div'>
                <img src={upload_icon}></img>
                <img src={more_icon}></img>
                <img src={notification_icon}></img>
                <img className='user-icon' src={profile_icon}></img>
            </div>
        </nav>
    )
}

