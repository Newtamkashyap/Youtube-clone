import React, { useEffect, useState } from "react";
import './Feed.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import { Link } from "react-router-dom";
import { API_Key, value_converter } from "../../data";
import moment from 'moment';



export function Feed({ category }) {

    const [data, setData] = useState([]);//here type is array type so it will store multipla datas. 
    const fetchData = async () => {
        // fetching the data from api
        const videoList_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_Key} `
        await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items))//promises and response
    }
    useEffect(() => {
        fetchData();//when we load the component,this useEfect will be exceuted.

    }, [category])//when the category id updated then also this fechData will be executed,so here in dependencied we add category
    /*so when we select category in that case it will update the category id, when the category will be 
    updated,it will update the categoryID and we will get the updated data from the API that will store in 
    data state,now in data state we have the data from API,this data will be use to displat the data in webpage*/
    return (
        <div className='feed' >
            {data.map((item, index) => { //passing indivisual item and index number.
                return (

                    // before we were adding videoid/20/4521 is random id, we are getting here 50 cards becj we give max length 50
                    //now we will add categoryId
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                        {/* this Link tag coming from react rounting dom */}
                        {/* <img src={thumbnail1}/>...........this was hardcoded image from our project  */}
                        {/* in next line number 41 we are fetching data from API , so we have to remove harcoded image and write again*/}
                        <img src={item.snippet.thumbnails.medium.url} />

                        {/* same for h2 tag and h3 and p */}
                        {/* <h2>Best channel to learn coding that help you to be a web development</h2>
                        <h3>Greatstack</h3>
                        <p>15K views &bull; 2 days ago</p> */}

                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>

                        {/* here time is coming in indian standard formate with date so we have to change
                         the formate /convert{like we want to diplay 1 hr ago ,2 hr ago like that, so we have
                          package.json there is moment attribute comes from installing the packages so we will
                         use here }  */}
                        {/* here everthing is coming from Api ,fetch from Api only all things are dynamic 
                        nothing is in static . */}


                    </Link>
                )

            })}



        </div>
    )
}