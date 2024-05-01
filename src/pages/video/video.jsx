import React from "react";
import './video.css'
import PlayVideo from "../../components/playVideo/playVideo";
export function Video(){
    return(
        <div className='play-container'>
            {/* here playvideo component are mounting */}
            <PlayVideo/>

        </div>
    )
}

