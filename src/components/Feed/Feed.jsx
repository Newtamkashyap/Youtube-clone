import React from "react";
import './Feed.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import { Link } from "react-router-dom";



export function Feed() {
    return (
        <div className='feed' >
            {/* videio/20/4521 is random id */}
            <Link to ={`video/20/4521`}className='card'>
                {/* this Link tag coming from react rounting dom */}
                <img src={thumbnail1} />
                <h2>Best channel to learn coding that help you to be a web development</h2>
                <h3>Greatstack</h3>
                <p>15K views &bull; 2 days ago</p>
            </Link>
            <div className='card'>
                <img src={thumbnail2} />
                <h2>Best channel to learn coding that help you to be a web development</h2>
                <h3>Greatstack</h3>
                <p>15K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail3} />
                <h2>Best channel to learn coding that help you to be a web development</h2>
                <h3>Greatstack</h3>
                <p>15K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail4} />
                <h2>Best channel to learn coding that help you to be a web development</h2>
                <h3>Greatstack</h3>
                <p>15K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail5} />
                <h2>Best channel to learn coding that help you to be a web development</h2>
                <h3>Greatstack</h3>
                <p>15K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail6} />
                <h2>Best channel to learn coding that help you to be a web development</h2>
                <h3>Greatstack</h3>
                <p>15K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail7} />
                <h2>Best channel to learn coding that help you to be a web development</h2>
                <h3>Greatstack</h3>
                <p>15K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail1} />
                <h2>Best channel to learn coding that help you to be a web development</h2>
                <h3>Greatstack</h3>
                <p>15K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail1} />
                <h2>Best channel to learn coding that help you to be a web development</h2>
                <h3>Greatstack</h3>
                <p>15K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail2} />
                <h2>Best channel to learn coding that help you to be a web development</h2>
                <h3>Greatstack</h3>
                <p>15K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail3} />
                <h2>Best channel to learn coding that help you to be a web development</h2>
                <h3>Greatstack</h3>
                <p>15K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail4} />
                <h2>Best channel to learn coding that help you to be a web development</h2>
                <h3>Greatstack</h3>
                <p>15K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail5} />
                <h2>Best channel to learn coding that help you to be a web development</h2>
                <h3>Greatstack</h3>
                <p>15K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail6} />
                <h2>Best channel to learn coding that help you to be a web development</h2>
                <h3>Greatstack</h3>
                <p>15K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail7} />
                <h2>Best channel to learn coding that help you to be a web development</h2>
                <h3>Greatstack</h3>
                <p>15K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail1} />
                <h2>Best channel to learn coding that help you to be a web development</h2>
                <h3>Greatstack</h3>
                <p>15K views &bull; 2 days ago</p>
            </div>

        </div>
    )
}