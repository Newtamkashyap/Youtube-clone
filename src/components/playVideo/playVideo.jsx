import React, { useEffect, useState } from "react";
import './playVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.png';
import { value_converter } from "../../data";
import moment from "moment";
const PlayVideo = ({videoId}) => {
    //here above we are dstructuring videoId

    const [apiData,setApiData]=useState(null);

    const fetchVideoData=async ()=>{
        //fetching the Videos data
        const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY} `;
        await fetch(videoDetails_url).then(res=>res.json()).then(data =>setApiData(data.items[0]))
    }

    useEffect(()=>{
        fetchVideoData();
/*here we are calling fetchVideoData function then the function will be executed
and the data coming from Api will be stored in apiData state*/
    },[])
    return (
        <div className='play-video'>
            {/* <video src={video1} controls autoPlay muted></video> ---------------we will use below embeded code from any youtube video */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            {/* <h3>Best Youtube Channel To Learn Web Development </h3>
            here we will comment that harcode data and will use dynamic from Api directly below */}
            <h3>{apiData?apiData.snippet.title:"Title here"}</h3>
            <div className="play-video-info">
                {/* <p>{apiData?value_converter(apiData.statistics.viewCount):"16K"} views &bull; {moment(apiData.snippet.publishedAt).fromNow()}</p> */}
                <div>
                    <span><img src={like} alt="" />124</span>
                    <span><img src={dislike} alt="" />3</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt='' />
                <div>
                    <p>GreatStack</p>
                    <span>1M Subscriber</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className='video-description'>
                <p>Channel that makes learning Easy.</p>
                <p>Subscribe Channel to watch More Tutorial on web development.</p>
                <hr />
                <h4>130 Comments</h4>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication 
                            .</p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication 
                          </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>

                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication 
                            </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication 
                            </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>


                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication 
                           </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>

                 <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicholson<span>1 day ago</span></h3>
                        <p>A global computer network providing a varity of information and communication
                             </p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>244</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                


            </div>
        </div>


    )
}
export default PlayVideo;