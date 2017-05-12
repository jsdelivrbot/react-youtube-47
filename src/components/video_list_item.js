import React from "react";

const VideoListItem = ({video,onVideoClick})=>{

    const imgUrl = video.snippet.thumbnails.default.url;
    return(
        <li onClick={()=>onVideoClick(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={imgUrl} alt="" className="media-object"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        <h6>{video.snippet.title}</h6>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;