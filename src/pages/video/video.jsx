import React from "react";
import './video.css'
import PlayVideo from "../../components/playVideo/playVideo";
import { Recommended } from "../../components/Recommended/Recommended";
export function Video(){
    return(
        <div className='play-container'>
            {/* here playvideo component are mounting */}
            <PlayVideo/>
            {/* after that here Recommended component are mounting */}

            <Recommended/>

        </div>
    )
}

