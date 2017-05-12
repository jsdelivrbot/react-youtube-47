import React from "react";

const VideoDetails = ({video})=>{
    if(!video){
        return <div><h1>Loading...</h1></div>;
    }
    const videoId = video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;
    return(
        <div className="video-detail">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive-item"></iframe>
            </div>
            <div className="details">
                <div><h3>{video.snippet.title}</h3></div>
                <div><p>{video.snippet.description}</p></div>
            </div>
        </div>
    )
}

export default VideoDetails