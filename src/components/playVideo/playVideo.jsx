import React, { useEffect, useState } from "react";
import './playVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.png';
import { value_converter, API_Key } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = ({ }) => {
    //here above we are dstructuring videoId
    const { videoId } = useParams();
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        //fetching the Videos data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_Key} `;
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]))
    }

    const fetchOtherData = async () => {
        //fetching channel data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_Key} `;
        await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]))
    }
const fetchCommentData=async ()=>{
    //fetching comment data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2CcontentDetails%2Cstatistics&videoId=${videoId}&key=${API_Key} `;
    await fetch(comment_url).then(res => res.json()).then(data => setCommentData(data.items))
    // this comment data will store in commentData store variable.
}
   


    useEffect(() => {
        fetchVideoData();
        /*here we are calling fetchVideoData function then the function will be executed
        and the data coming from Api will be stored in apiData state*/
    }, [videoId])

    useEffect(() => {
        fetchOtherData();
        /*so when the apiData will updated this useeffect function will be executed & in this
         function we will call fetchOtherData function*/
    }, [apiData])

    useEffect(() => {
        fetchCommentData();
        /*so when the apiData will updated this useeffect function will be executed & in this
         function we will call fetchOtherData function*/
    }, [])
    return (
        <div className='play-video'>
            {/* <video src={video1} controls autoPlay muted></video> ---------------we will use below embeded code from any youtube video */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} styleborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            {/* <h3>Best Youtube Channel To Learn Web Development </h3>
            here we will comment that harcode data and will use dynamic from Api directly below */}
            <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
            <div className="play-video-info">
                <p>{apiData ? value_converter(apiData.statistics.viewCount) : "16K"}Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}</p>
                {/* by using moment package time is converting in million or thousands  */}
                <div>
                    <span><img src={like} alt="" />{apiData ? value_converter(apiData.statistics.likeCount) : 155}</span>
                    <span><img src={dislike} alt="" /></span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt='' />
                {/* if the channelData is available in that case we will get the channel logo url
                 if it is available and if it is not available then it will display empty string  */}
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
                    {/* all the details coming from api and here we are checking with ternary
                     operator that in apiData.snippet.channelTitle is available or not if not we are using empty string or
                      we can send any hardcoded msg */}
                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : "1M"}</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className='video-description'>
                {/* <p>Channel that makes learning Easy.</p>
                <p>Subscribe Channel to watch More Tutorial on web development.</p> 
                here also we are removing hardcoded discription and make dynamic from api*/}
                <p>{apiData ? apiData.snippet.description.slice(0, 300) : "Description here"}</p>
                {/* above we are using Api description that is very long so we will use here slice method to sort the msg */}
                <hr />
                <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 102}comments</h4>





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
                

           
             
             



            </div>
        </div>


    )
}
export default PlayVideo;