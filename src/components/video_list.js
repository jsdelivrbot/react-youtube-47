import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props)=>{

    const videoItem = props.videoList.map((video)=>{
       return  (
           <VideoListItem
               onVideoClick = {props.onVideoSelect}
               video={video}
               key={video.etag}/>
       )
    })
    return (
        <ul className="list-group">
            {videoItem}
        </ul>
    );
};

export default VideoList;