import React from "react";
import './sidebar.css';

import home from '../../assets/home.png';
import automobiles from '../../assets/automobiles.png';
import game_icon from '../../assets/game_icon.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

export function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sortcut-links'>
                <div className='side-link'>
                    <img src={home} /><p>Home</p>
                </div>

                <div className='side-link'>
                    <img src={game_icon} /><p>Gaming</p>
                </div>

                <div className='side-link'>
                    <img src={automobiles} /><p>Automobiles</p>
                </div>

                <div className='side-link'>
                    <img src={sports} /><p>Sports</p>
                </div>

                <div className='side-link'>
                    <img src={entertainment} /><p>Entertaiment</p>
                </div>

                <div className='side-link'>
                    <img src={tech} /><p>Technology</p>
                </div>

                <div className='side-link'>
                    <img src={music} /><p>Music</p>
                </div>

                <div className='side-link'>
                    <img src={blogs} /><p>Blogs</p>
                </div>

                <div className='side-link'>
                    <img src={news} /><p>News</p>
                </div>
                <hr/>
                {/* <div className='side-link'>
                    <img src={home} /><p>Home</p>
                </div>

                <div className='side-link'>
                    <img src={home} /><p>Home</p>
                </div>

                <div className='side-link'>
                    <img src={home} /><p>Home</p>
                </div>

                <div className='side-link'>
                    <img src={home} /><p>Home</p>
                </div>

                <div className='side-link'>
                    <img src={home} /><p>Home</p>
                </div>
                */}
            </div>
        </div>
    )
}