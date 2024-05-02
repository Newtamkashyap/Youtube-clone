import React from "react";
import './video.css'
import PlayVideo from "../../components/playVideo/playVideo";
import { Recommended } from "../../components/Recommended/Recommended";
import { useParams } from "react-router-dom";
export function Video(){
    const {videoId,categoryId}=useParams();
    return(
        <div className='play-container'>
            {/* here playvideo component are mounting then in playvideo we are setting videoId */}
            <PlayVideo videoId={videoId}/>
            {/* after that here Recommended component are mounting */}

            <Recommended/>

        </div>
    )
}

